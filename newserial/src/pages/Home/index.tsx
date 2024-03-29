import { useEffect, useState } from "react";
import { Container, DailyQuizTitle, } from "./styles";
import Header from "./components/Header/index";
import LoadingImage from "../../components/LoadingImage";
import DailyQuiz from "./components/DailyQuiz/index";
import CustomNews from "./components/CustomNews/index";
import NewSerial from "./components/NewSerial/index";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import api from "../../api";


import { setLoading, setDoneLoading } from '../../redux/modules/loading';

interface RootState {
  auth: {
    accessToken: null | string;
  };
  loading: {
    loading: boolean;
  }
}

interface Quiz {
  wordsId: number;
  question: string;
  userAnswer: string;
  quizAnswer: string;
  result: string;
  explanation: string;
}

interface MainQuizNews {
  id: number;
  title: string;
}

interface MainQuizAnswered {
  wordsId: number;
  question: string;
  userAnswer: string;
  quizAnswer: string;
  result: string;
  explanation: string;
}

interface NewSerialNews {
  totalNewsCount: number;
  newsListResponseDtos: [
    {
      id: number;
      category_id: number;
      title: string;
      body: string;
      image: string | null;
      press: string;
    }
  ];
}

/**
 * 홈 페이지
 * @author 김민지
 */
const Home = () => {
  const location = useLocation();
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  const isLoading = useSelector((state: RootState) => state.loading.loading);
  const dispatch = useDispatch();

  const onGetData = () => {
    dispatch(setDoneLoading());
  }



  const [question, setQuestion] = useState<Quiz[]>();
  const [mainQuizNews, setMainQuizNews] = useState<MainQuizNews>();
  const [userAnswerWordsId, setUserAnswerWordsId] = useState<
    number | undefined
  >();
  const [userAnswer, setUserAnswer] = useState<string | undefined>();

  const [newSerialNews, setNewSerialNews] = useState<NewSerialNews>();
  const [newSerialNewsCategory, setNewSerialNewsCategory] = useState<number>(0);



  /**
   * 한 입 퀴즈 get 하는 함수
   * @return {Array.<{wordIs: number, question : string}>}
   */
  const getQuiz = async () => {
      try {
        const { data } = await api.post(
          `/main-quiz`,
          {},
          {
            headers: {
              Authorization: accessToken,
            },
          }
        );
        if (data !== undefined && data.length > 0) {
          data.map(
            (el: {
              userAnswer: string;
              quizAnswer: string;
              result: string;
              explanation: string;
            }) => {
              if (!userAnswer) {
                el.userAnswer = "";
                el.quizAnswer = "";
                el.result = "";
                el.explanation = "";
              }
            }
          );
          setQuestion(data);
          onGetData();

        }
      } catch (error) {
        console.log("에러가 발생했습니다.kk", error);
      }
    
  };

  /**
   * 한 입 퀴즈 맞춤 기사 get 함수
   * @return {Array.<{id: number, title : string}>}
   */
  const getMainQuizNews = async () => {
      try {
        const { data } = await api.get(`/main-quiz/news`, {
          headers: {
            Authorization: accessToken,
          },
        });
        if (data !== undefined) {
          setMainQuizNews(data);
        }
      } catch (error) {
        console.log("에러가 발생했습니다.", error);
      }
    
  };

  /**
   * 뉴-시리얼 기사 전체 get 함수
   * @return {Array.<{id: number, title : string}>}
   */
  const getNews = async () => {
    try {
      const { data } = await api.get(`/newserial?page=0`, {
      });
      if (data !== undefined) {
        setNewSerialNews(data);
      } else {
        return;
      }
    } 
    catch (error) {
    }
  };

  /**
   * 뉴-시리얼 기사 카테고리별 get 함수
   * @return {Array.<{id: number, title : string}>}
   */
  const getCategoryNews = async () => {
    try {
      const { data } = await api.get(
        `/newserial/${newSerialNewsCategory}?page=0`,
      );
      if (data !== undefined) {
        setNewSerialNews(data);
      }
    } catch (error) {
      console.log("에러가 발생했습니다.", error);
    }
  };

  /**
   * 한입 퀴즈 정답 제출 post 함수
   * @param {number} wordsId 한입퀴즈 id
   * @param {string} userAnswer 사용자 답변
   * @returns {wordsId: number, question: string, userAnswer:string, quizAnswer:string, result: string, explanation: string}
   */
  const postMainQuizAnswer = async () => {
    if (accessToken !== null && userAnswer && userAnswerWordsId) {
      let sendData = {
        wordsId: userAnswerWordsId,
        userAnswer: userAnswer,
      };
      try {
        const { data } = await api.post(`/main-quiz/answer`, sendData, {
          headers: {
            Authorization: `${accessToken}`,
          },
        });

        if (data !== undefined) {
          setQuestion((prevState) => {
            return prevState?.map((question) => {
              if (question.wordsId === userAnswerWordsId) {
                return { ...question, ...data };
              }
              setUserAnswer('');
              return question;
            });
          });
        }
      } catch (error) {
        console.log("에러가 발생했습니다.", error);
      }
    }
  };


  useEffect(() => {
    getNews();

    if (accessToken !== null) {
      getQuiz();
      getMainQuizNews();
    } else {
      dispatch(setDoneLoading());
    }
  }, [accessToken]);

  useEffect(() => {
    if (userAnswer !== "") {
      postMainQuizAnswer();
    }
  }, [userAnswer]);

  useEffect(() => {
    if ( newSerialNewsCategory === 0) {
      getNews();
    } else {
      getCategoryNews();
    }
  }, [newSerialNewsCategory]);

  return (
    <Container>
      <Header />
      {accessToken && question !== null && <>
        <DailyQuizTitle>한 입 퀴즈</DailyQuizTitle>
        {/* {isLoading === true ? <LoadingImage />
            : ( */}
        <DailyQuiz
          isLoading={isLoading}
          question={question}
          userAnswerWordsId={userAnswerWordsId}
          setUserAnswerWordsId={setUserAnswerWordsId}
          userAnswer={userAnswer}
          setUserAnswer={setUserAnswer}
        />
        {/* )} */}



        {mainQuizNews ? <CustomNews mainQuizNews={mainQuizNews} /> : null}
        {/* <NewSerial
          question={question}
          newSerialNews={newSerialNews}
          newSerialNewsCategory={newSerialNewsCategory}
          setNewSerialNewsCategory={setNewSerialNewsCategory}
        /> */}
      </>
      }
      {isLoading === true ? <LoadingImage /> :
        <NewSerial
          question={question}
          newSerialNews={newSerialNews}
          newSerialNewsCategory={newSerialNewsCategory}
          setNewSerialNewsCategory={setNewSerialNewsCategory}
        />}
    </Container>
  );
};

export default Home;
