import { useEffect } from "react";
import {
  DailyQuizArea,
  DailyQuizTitle,
  QuestionRow,
  AnswerRow,
  AnswerButton,
} from "./styles";
import axios from "axios";

const DailyQuiz = () => {



  return (
    <DailyQuizArea>
      <DailyQuizTitle>한 입 퀴즈</DailyQuizTitle>
      <QuestionRow>가상화폐는 ~~~이다.</QuestionRow>
      <AnswerRow>
        <AnswerButton>O</AnswerButton>
        <AnswerButton>X</AnswerButton>
      </AnswerRow>
    </DailyQuizArea>
  );
};

export default DailyQuiz;
