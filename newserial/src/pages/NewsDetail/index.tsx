import { useEffect, useState } from "react";
import {
  Container,
  HeaderArea,
  HeaderBox,
  Logo,
  SearchButton,
  MyPageButton,
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
import { useSelector } from "react-redux";
import Modal from "../../components/Modal";
import QuizModal from "./components/QuizModal";
import api from "../../api";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { getSpeech } from "./utils/getSpeech";

interface RootState {
  auth: {
    accessToken: null | string;
  };
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
  const [isToggleOn, setIsToggleOn] = useState<boolean>(false);
  const [shortNews, setShortNews] = useState<ShortNews>();
  const [bookmark, setBookmark] = useState<boolean>();

  const [TTStext, setTTStext] = useState<string[]>();
  const [isSpeakerOn, setIsSpeakerOn] = useState<boolean>(false);
  const [isTTSOn, setIsTTSOn] = useState<boolean>(false);

  const [paraphraseQuestion, setParaphraseQuestion] = useState<string>("");
  const [paraphraseResult, setParaphraseResult] = useState<string>("");
  const [newSerialAnswered, setNewSerialAnswered] = useState<
    NewSerialAnswered | undefined
  >();
  const [newSerialNotAnswered, setNewSerialNotAnswered] = useState<
    string | undefined
  >("");

  const [modalToggle, setModalToggle] = useState(false);
  const [userQuizAnswer, setUserQuizAnswer] = useState<string | undefined>();

  const location = useLocation();
  const newsId = location.state.newsId;
  const newsCategoryId = location.state.newsCategoryId;


  /**
   * 뉴스 paraphase post 함수
   * @param {string} question paraphrase하고자 하는 문장
   * @returns {question: string}
   */
  const postParaphrase = async (paraphraseQuestion: string) => {
    if (accessToken !== null && paraphraseQuestion) {
      const { data } = await api.post(`/paraphrasing`, paraphraseQuestion, {
        headers: {
          withCredentials: true,
          "Content-Type": "application/json",
          Authorization: accessToken,
        },
      })
      if (data !== undefined) {
        setParaphraseResult(data);
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

  useEffect(() => {
    getNewsDetail();
    window.speechSynthesis.getVoices()
  }, [accessToken]);

  useEffect(() => {
    if (paraphraseQuestion) {
      postParaphrase(paraphraseQuestion);
    }
  }, [paraphraseQuestion]);

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

  
  useEffect(() => {
    if (TTStext !== undefined && TTStext.length > 0) {
      setIsTTSOn(true);
      getSpeech("")
      TTStext.map((el, index) => {
        setIsTTSOn(true);
        getSpeech(el);
      })
      setTTStext(undefined);
    }




  }, [TTStext])

  console.log('isTTSOn', isTTSOn)

useEffect(()=>{

  setTimeout(() => {
    if (TTStext === undefined) {
      setIsTTSOn(false);
    }
  }, 3000);
},[isSpeakerOn])


  return (
    <Container>
      <HeaderArea>
        <HeaderBox>
          <Logo>NEWSERIAL</Logo>
          <SearchButton src="/assets/icons/icon_search.svg" />
          <MyPageButton src="/assets/icons/icon_mypage.svg" />
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
            />
          }
        />
      )}

      <NewsArea>
        <NewsTitleArea>
          <Genre>{shortNews?.category_name}</Genre>
          <Title>{shortNews?.title}</Title>
        </NewsTitleArea>
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
            if (shortNews?.body !== undefined) {
              setIsSpeakerOn(true);
              setIsTTSOn(true); 
              setTTStext(shortNews?.body);
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
              <>
                <ParaphraseQuestionSentence key={index}>{el}</ParaphraseQuestionSentence>
                <ParaphraseQuestionResult>
                  {paraphraseResult}
                </ParaphraseQuestionResult>
              </>
            ) : (
              <NewsSentence
                key={index}
                isToggleOn={isToggleOn}
                onClick={() => setParaphraseQuestion(el)}
              >
                {el}
              </NewsSentence>
            )
          )}
        </NewsContent>
        <Source>
          <a
            style={{ textDecoration: "none", color: "#979797" }}
            href={'https://www.' + shortNews?.url}
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
