import { useEffect, useState } from "react";
import {
  Container,
  HeaderArea,
  HeaderBox,
  Logo,
  SearchButton,
  MyPageButton,
  MobileNewsTitleArea,
  NewsTitleArea,
  Genre,
  Title,
  BookmarkIcon,
  NewsArea,
  MenuArea,
  Speaker,
  ParaphraseArea,
  Paraphrase,
  ParaphraseQuestionSentence,
  ParaphraseQuestionResult,
  NewsSentence,
  NewsContent,
  Source,
  ClipButton,
  PCQuizButton,
  MobileQuizButton,
} from "./styles";
import ToggleSlide from "./components/ToggleSlide";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../../components/Modal";
import QuizModal from "./components/QuizModal";
import LoadingImage from "../../components/LoadingImage";
import api from "../../api";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { getSpeech } from "./utils/getSpeech";
import { setDoneLoading, setLoading } from "../../redux/modules/loading";

interface RootState {
  auth: {
    accessToken: null | string;
  };
  loading: {
    loading: boolean;
  }
}

interface ShortNews {
  id: number;
  title: string;
  body: string[];
  category_name: string;
  url: string;
  bookmark: boolean;
}

interface NewSerialAnswered {
  question: string;
  userAnswer: string;
  quizAnswer: string;
  result: string;
  explanation: string;
}

/**
 * 뉴스 상세 페이지
 * @author 김민지
 */
const NewsDetail = () => {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isToggleOn, setIsToggleOn] = useState<boolean>(false);
  const [shortNews, setShortNews] = useState<ShortNews>();
  const [bookmark, setBookmark] = useState<boolean>();

  const [TTStext, setTTStext] = useState<string[]>();
  const [isSpeakerOn, setIsSpeakerOn] = useState<boolean>(false);
  const [isTTSOn, setIsTTSOn] = useState<boolean>(false);

  const [paraphraseQuestion, setParaphraseQuestion] = useState<string>("");
  const [paraphraseResult, setParaphraseResult] = useState<string>("");
  const [newSerialAnswered, setNewSerialAnswered] = useState<NewSerialAnswered | undefined>();
  const [newSerialNotAnswered, setNewSerialNotAnswered] = useState<string | undefined>("");

  const [modalToggle, setModalToggle] = useState(false);
  const [userQuizAnswer, setUserQuizAnswer] = useState<string | undefined>();

  const location=useLocation();
  const searchParams = new URLSearchParams(location.search);
  const newsId = searchParams.get('newsId');

  const isLoading = useSelector((state: RootState) => state.loading.loading);



  const onGetData = () => {
    dispatch(setDoneLoading());
  }


  /**
   * 뉴스 paraphase post 함수
   * @param {string} question paraphrase하고자 하는 문장
   * @returns {question: string}
   */
  const postParaphrase = async (question: string) => {
    setParaphraseQuestion(question);
    if (accessToken !== null && question.length > 0) {
      const { data } = await api.post(`/paraphrasing`, question, {
        headers: {
          withCredentials: true,
          "Content-Type": "application/json",
          Authorization: accessToken,
        },
      })
      if (data !== undefined) {
        setParaphraseResult(data);
        onGetData();
      }
    }
  };

  /**
   * 뉴스 북마크 등록 post 함수
   */
  const postBookmark = async () => {
    if (accessToken !== null) {
      try {

        const { data } = await api.post(`/bookmark/` + newsId, {}, {
          headers: {
            Authorization: accessToken,
          },
        })
        if (data !== undefined) {
          setBookmark(true);
        }
      } catch (error) {
        console.log('error가 발생했습니다', error)
      }
    }
  };

  /**
   * 뉴스 북마크 삭제 delete 함수
   */
  const deleteBookmark = async () => {
    if (accessToken !== null) {
      try {
        const { data } = await api.delete(`/bookmark/` + newsId, {
          headers: {
            Authorization: accessToken,
          },
        })
        if (data !== undefined) {
          setBookmark(false);
        }
      } catch (error) {
        console.log('error가 발생했습니다.', error)
      }
    }
  };

  /**
   * 뉴시리얼 퀴즈 조회 및 생성 post 함수
   * @returns {question: string, userAnswer:string, quizAnswer:string, result: string, explanation: string}
   */
  const postNewSerialQuiz = async () => {
    setModalToggle(true);
    if (accessToken !== null) {
      try {
        const { data } = await api.post(`/newserial-quiz/` + newsId, {}, {
          headers: {
            Authorization: accessToken,
          },
        })
        if (data !== undefined) {
          if (data.userAnswer) {
            setNewSerialAnswered(data);
          } else if (data?.question) {
            setNewSerialNotAnswered(data.question)
          }
        }
      } catch (error) {
        console.log('에러가 발생했습니다.', error);
      }
    }
  };

  /**
   * 뉴시리얼 퀴즈 정답 제출 post 함수
   * @param {number} newsId 뉴스 id
   * @param {string} userAnswer 사용자 답변
   * @returns {question: string, userAnswer:string, quizAnswer:string, result: string, explanation: string}
   */
  const postNewSerialQuizAnswer = async () => {
    if (accessToken !== null && userQuizAnswer) {
      let sendData = {
        newsId: newsId,
        userAnswer: userQuizAnswer,
      };

      try {
        const { data } = await api.post(`/newserial-quiz/answer`, sendData, {
          headers: {
            Authorization: accessToken,
          },
        })
        if (data !== undefined) {
          setNewSerialNotAnswered("");
          setNewSerialAnswered(data);
        }
      } catch (error) {
        console.log('에러가 발생했습니다.', error);
      }
    }
  };


  /**
 * 뉴스 상세 get 함수
 * @returns {id: number, title : string, body: string[], category_name:string, url: string}
 */
  const getNewsDetail = async () => {
    try {
      const { data } = await api.get(`/short-news/` + newsId, {
        headers: {
          Authorization: `${accessToken}`,
        },
      });

      if (data) {
        setShortNews(data);
        setBookmark(data?.bookmark);
      } else {
        console.error("API 응답에 데이터가 없습니다.");
      }
    } catch (error) {
      console.error("API 요청 중 오류가 발생했습니다:", error);
    }
  }


  const handleParaphraseQuestion = (el: string) => {
    dispatch(setLoading());
    if (!paraphraseQuestion && el.length > 0) {
      postParaphrase(el);
    } else if (el !== paraphraseQuestion) {
      postParaphrase(el);
    }
  }



  useEffect(() => {
    getNewsDetail();
    window.speechSynthesis.getVoices()
  }, [accessToken]);


  useEffect(() => {
    if (isToggleOn === false) {
      setParaphraseQuestion("");
      setParaphraseResult("");
    }
  }, [isToggleOn]);

  useEffect(() => {
    if (userQuizAnswer) {
      postNewSerialQuizAnswer();
    }
  }, [userQuizAnswer]);


  function stopSpeech() {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      setIsTTSOn(false);
    }
  }

  useEffect(() => {
    if (TTStext !== undefined && TTStext.length > 0) {
      const newsBody = TTStext.join(' ');
      const noSpace = newsBody.split(' ').join('');
      getSpeech(newsBody);
      setTimeout(() => {
        setIsTTSOn(false);
      }, (noSpace.length) * 206)

      setTTStext(undefined);
    }
  }, [TTStext])

  return (
    <Container>
      <HeaderArea>
        <HeaderBox>
          <Logo onClick={()=>navigate('/')}>NEWSERIAL</Logo>
          <SearchButton
            onClick={() => navigate("/search-result")}
            src="/assets/icons/icon_search.svg"
          />
          <MyPageButton
            onClick={() => navigate("/mypage")}
            src="/assets/icons/icon_mypage.svg"
          />
        </HeaderBox>
      </HeaderArea>

      {modalToggle && (
        <Modal
          setToggle={setModalToggle}
          content={
            <QuizModal
              userQuizAnswer={userQuizAnswer}
              setUserQuizAnswer={setUserQuizAnswer}
              newSerialAnswered={newSerialAnswered}
              newSerialNotAnswered={newSerialNotAnswered}
            />}
          colorSelected="#F7F7F7"
        />
      )}
      <NewsTitleArea>
        <Genre>{shortNews?.category_name}</Genre>
        <Title style={{ marginBottom: "18px" }}>{shortNews?.title}</Title>
      </NewsTitleArea>

      <NewsArea>
        <MobileNewsTitleArea>
          <Genre>{shortNews?.category_name}</Genre>
          <Title>{shortNews?.title}</Title>
        </MobileNewsTitleArea>
        <BookmarkIcon
          onClick={bookmark !== true ? postBookmark : deleteBookmark}
          src={
            bookmark !== true
              ? "/assets/icons/icon_bookmark_N.svg"
              : "/assets/icons/icon_bookmark_Y.svg"
          }
        />
        <MenuArea>
          <Speaker onClick={() => {
            if (isTTSOn === true) {
              stopSpeech();
            } else {
              if (shortNews?.body !== undefined) {
                setIsTTSOn(true);
                setTTStext(shortNews?.body);
              }
            }
          }}
            src={isTTSOn === true ? "/assets/icons/icon_speaker_Y.svg" : "/assets/icons/icon_speaker_N.svg"} />
          <ParaphraseArea>
            <Paraphrase>쉬운 설명</Paraphrase>
            <ToggleSlide
              setIsToggleOn={setIsToggleOn}
              isToggleOn={isToggleOn}
            />
          </ParaphraseArea>
        </MenuArea>

        <NewsContent>
          {shortNews?.body?.map((el, index) =>
            el === paraphraseQuestion ? (
              <div key={'question_' + index} style={{ width: "100%" }}>
                <ParaphraseQuestionSentence >{el}</ParaphraseQuestionSentence>
                <ParaphraseQuestionResult>
                  {isLoading ?
                    <LoadingImage />
                    : paraphraseResult}

                </ParaphraseQuestionResult>
              </div>
            ) : (
              <NewsSentence
                key={'news_' + index}
                isToggleOn={isToggleOn}
                onClick={() => handleParaphraseQuestion(el)}
              >
                {el}
              </NewsSentence>
            )
          )}
        </NewsContent>
        <Source>
          <a
            style={{ textDecoration: "none", color: "#979797" }}
            href={shortNews?.url}
            target="_blank"
          >
            출처: {shortNews?.title}
            <ClipButton />
          </a>
        </Source>
        <PCQuizButton onClick={postNewSerialQuiz}>QUIZ</PCQuizButton>
      </NewsArea>
      <MobileQuizButton onClick={postNewSerialQuiz}>QUIZ</MobileQuizButton>
    </Container>
  );
};

export default NewsDetail;
