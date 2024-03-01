import { useEffect, useState } from "react";
import {
  Container,
  DailyQuizTitle,

} from "./styles";
import Header from "./components/Header/index";
import DailyQuiz from "./components/DailyQuiz/index";
import CustomNews from "./components/CustomNews/index";
import NewSerial from "./components/NewSerial/index";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import api from "../../api";
<<<<<<< HEAD
=======

>>>>>>> 4cd876ad7ff4c086fabfa61d02860d40cad6ee44

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

interface NewSerialNews {
  totalNewsCount: number,
  newsListResponseDtos: [
    {
      id: number,
      category_id: number,
      title: string,
      body: string,
    }
  ]
}

/**
 * 홈 페이지
 * @author 김민지
 */
const Home = () => {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  const [question, setQuestion] = useState<Quiz[]>();
  const [mainQuizNews, setMainQuizNews] = useState<MainQuizNews>();
  const [newSerialNews, setNewSerialNews] = useState<NewSerialNews>();
  const [newSerialNewsCategory, setNewSerialNewsCategory] = useState<number>(0);

  /**
 * 한 입 퀴즈 get 하는 함수
 * @return {Array.<{wordIs: number, question : string}>}
 */
  const getQuiz = async () => {
<<<<<<< HEAD
    if (accessToken !== undefined) {
      try {
        const { data } = await api.post(`/main-quiz`, {}, {
          headers: {
            Authorization: accessToken,
          },
        })
        console.log('data',data)
        if (data!==undefined && data.length>0) {
          setQuestion(data);
        }
      } 
      catch (error) {
        console.log('에러가 발생했습니다.', error);
      }
    }
=======
    await api.post(`/main-quiz`, {}, {
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
>>>>>>> 4cd876ad7ff4c086fabfa61d02860d40cad6ee44
  };



<<<<<<< HEAD
  /**
 * 한 입 퀴즈 맞춤 기사 get 함수
 * @return {Array.<{id: number, title : string}>}
 */
  const getMainQuizNews = async () => {
    if (accessToken !== undefined) {
      try {
        const { data } = await api.get(`/main-quiz/news`, {
          headers: {
            Authorization: accessToken,
          },
=======
    /**
   * 한 입 퀴즈 맞춤 기사 get 함수
   * @return {Array.<{id: number, title : string}>}
   */
    const getMainQuizNews = async () => {
      await api.get(`/main-quiz/news`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: accessToken,
          withCredentials: true
        },
      })
        .then(response => {
          setMainQuizNews(response.data)
>>>>>>> 4cd876ad7ff4c086fabfa61d02860d40cad6ee44
        })
        if (data !== undefined) {
          setMainQuizNews(data)
        }
      } catch (error) {
        console.log('에러가 발생했습니다.', error)
      }
    }
  };


<<<<<<< HEAD
  /**
 * 뉴-시리얼 기사 get 함수
 * @return {Array.<{id: number, title : string}>}
 */
  const getNews = async () => {
    if (accessToken !== undefined) {
      try {
        const { data } = await api.get(`/newserial?page=0`, {
          headers: {
            Authorization: accessToken,
          },
=======
    /**
   * 뉴-시리얼 기사 get 함수
   * @return {Array.<{id: number, title : string}>}
   */
    const getNews = async () => {
      await api.get(`/main-quiz/news`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: accessToken,
          withCredentials: true
        },
      })
        .then(response => {
          setMainQuizNews(response.data)
>>>>>>> 4cd876ad7ff4c086fabfa61d02860d40cad6ee44
        })
        if (data !== undefined) {
          setNewSerialNews(data)
        }
      } catch (error) {
        console.log('에러가 발생했습니다.', error)
      }
    }

    // await axios.get(`${process.env.REACT_APP_API}/main-quiz/news`, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: accessToken,
    //     withCredentials: true
    //   },
    // })
    //   .then(response => {
    //     setMainQuizNews(response.data)
    //   })
    //   .catch(error => {
    //     console.error('API 호출 에러:', error);
    //   });
  };


  useEffect(() => {
    getQuiz();
    getMainQuizNews();
    getNews();
  }, [accessToken])


  return (
    <Container>
      <Header />
<<<<<<< HEAD
      <DailyQuizTitle>한 입 퀴즈</DailyQuizTitle>

      {question !== undefined && question !== null && <DailyQuiz question={question} />}
      {mainQuizNews ? <CustomNews mainQuizNews={mainQuizNews} /> : null}
      <NewSerial
        newSerialNews={newSerialNews}
        newSerialNewsCategory={newSerialNewsCategory}
        setNewSerialNewsCategory={setNewSerialNewsCategory} />

=======
      <DailyQuiz />
      <CustomNews />
      <NewSerial />
>>>>>>> 4cd876ad7ff4c086fabfa61d02860d40cad6ee44
    </Container>
  );
};

export default Home;