import { useEffect } from "react";
import {
  QuizArea,
  Quiz,
  Question,
  Explanation,
  AnswerRow,
  AnsweredQuestion,
  AnsweredQuizAnswer,
  AnsweredExplanation,
  AnsweredAnswerRow,

} from "./styles";
import axios from "axios";

interface NewSerialAnswered {
  question: string,
  userAnswer: string,
  quizAnswer: string,
  result: string,
  explanation: string,
}

interface QuizModalProps {
  userQuizAnswer: string | undefined;
  setUserQuizAnswer: React.Dispatch<React.SetStateAction<string | undefined>>;
  newSerialAnswered?: NewSerialAnswered;
  newSerialNotAnswered?: string;
}


const QuizModal = ({ userQuizAnswer, setUserQuizAnswer, newSerialAnswered, newSerialNotAnswered, }: QuizModalProps) => {
  return (
    <QuizArea>
      <Quiz>QUIZ</Quiz>
      {newSerialNotAnswered &&
        <div style={{ padding: "25px", marginBottom: "30px" }}>
          <Question>{newSerialNotAnswered}</Question>
          <AnswerRow style={{ marginBottom: "16px" }} onClick={() => setUserQuizAnswer("O")}>O</AnswerRow>
          <AnswerRow onClick={() => setUserQuizAnswer("X")}>X</AnswerRow>
        </div>
      }

      {newSerialAnswered !== undefined &&
        <div style={{ padding: "25px", marginBottom: "30px" }}>
          <AnsweredQuestion>Q. {newSerialAnswered?.question}</AnsweredQuestion>
          <AnsweredQuizAnswer>A. {newSerialAnswered?.quizAnswer}</AnsweredQuizAnswer>
          <AnsweredExplanation>{newSerialAnswered?.explanation}</AnsweredExplanation>
          <AnsweredAnswerRow
            style={{
              backgroundColor: newSerialAnswered?.userAnswer === "O"
                ? newSerialAnswered?.quizAnswer === "O"
                  ? "#3AB93F" : "#F85252" : "#FFFFFF"
              , marginBottom: "16px"
            }}>
            O
          </AnsweredAnswerRow>
          <AnsweredAnswerRow
            style={{
              backgroundColor: newSerialAnswered?.userAnswer === "X"
                ? newSerialAnswered?.quizAnswer === "X"
                  ? "#3AB93F" : "#F85252" : "#FFFFFF"
            }}
          >
            X</AnsweredAnswerRow>
        </div>
      }
    </QuizArea>


  );
};

export default QuizModal;
