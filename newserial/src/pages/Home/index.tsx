import { useEffect, useState } from "react";
import {
  Container,

} from "./styles";
import Header from "./components/Header/index";
import DailyQuiz from "./components/DailyQuiz/index";
import CustomNews from "./components/CustomNews/index";
import NewSerial from "./components/NewSerial/index";
import axios from "axios";

const getQuiz = async () => {
 await axios.post(`${process.env.REACT_APP_API}/main-quiz`, {}, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ',
      withCredentials:true
    },
  })
    .then(response => {
      // 성공 시의 처리
      console.log('API 응답:', response.data);
    })
    .catch(error => {
      // 실패 시의 처리
      console.error('API 호출 에러:', error);
    });
};


const Home = () => {
  const [question, setQuestion] = useState();
  useEffect(() => {
    getQuiz();
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
