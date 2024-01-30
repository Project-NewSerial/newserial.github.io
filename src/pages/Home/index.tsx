import { useEffect, useState } from "react";
import {
  Container,

} from "./styles";
import Header from "./components/Header/index";
import DailyQuiz from "./components/DailyQuiz/index";
import CustomNews from "./components/CustomNews/index";
import NewSerial from "./components/NewSerial/index";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

interface RootState {
  auth: {
    accessToken: null | string;
  };
}

interface Quiz {
  wordsId: number,
  question: string, 
}

interface MainQuizNews {
  id: number,
  title: string,
}

/**
 * 홈 페이지
 * @author 김민지
 */
const Home = () => {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  const [question, setQuestion] = useState<Quiz[]>();
  const [mainQuizNews, setMainQuizNews]=useState<MainQuizNews[]>();

    /**
   * 한 입 퀴즈 get 하는 함수
   * @returns {Array.<{wordIs: number, question : string}>}
   */
  const getQuiz = async () => {
    await axios.post(`${process.env.REACT_APP_API}/main-quiz`, {}, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
        withCredentials: true
      },
    })
      .then(response => {
        setQuestion(response.data)
      })
      .catch(error => {
        console.error('API 호출 에러:', error);
      });
  };



    /**
   * 한 입 퀴즈 맞춤 기사 get 함수
   * @returns {Array.<{id: number, title : string}>}
   */
    const getMainQuizNews = async () => {
      await axios.get(`${process.env.REACT_APP_API}/main-quiz/news`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: accessToken,
          withCredentials: true
        },
      })
        .then(response => {
          setMainQuizNews(response.data)
        })
        .catch(error => {
          console.error('API 호출 에러:', error);
        });
    };


    /**
   * 뉴-시리얼 기사 get 함수
   * @returns {Array.<{id: number, title : string}>}
   */
    const getNews = async () => {
      await axios.get(`${process.env.REACT_APP_API}/main-quiz/news`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: accessToken,
          withCredentials: true
        },
      })
        .then(response => {
          setMainQuizNews(response.data)
        })
        .catch(error => {
          console.error('API 호출 에러:', error);
        });
    };


  useEffect(() => {
    getQuiz();
    getMainQuizNews();
  }, [])


  return (
    <Container>
      <Header />
      <DailyQuiz />
      <CustomNews />
      <NewSerial />

    </Container>
  );
};

export default Home;
