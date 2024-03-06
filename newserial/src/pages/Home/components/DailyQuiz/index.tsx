import { useEffect } from "react";
import {
  DailyQuizArea,
  DailyQuizCard,
  DailyQuizTitle,
  QuestionRow,
  AnsweredQuizAnswer,
  AnsweredExplanation,
  AnsweredAnswerRow,
  AnswerRow,
  AnswerButton,
} from "./styles";
import axios from "axios";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Quiz {
  wordsId: number,
  question: string,


  userAnswer: string;
  quizAnswer: string;
  result: string;
  explanation: string;
}


const DailyQuiz = (props: {
  question: Quiz[] | undefined,
  userAnswerWordsId: number | undefined,
  setUserAnswerWordsId: React.Dispatch<React.SetStateAction<number | undefined>>,
  userAnswer: string | undefined,
  setUserAnswer: React.Dispatch<React.SetStateAction<string | undefined>>,
}) => {


  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
    centerMode: true, // 선택된 슬라이드를 가운데에 위치시킴
    centerPadding: '50px', // 슬라이드 양 옆에 마진 설정

  };

  return (
    <DailyQuizArea  >
      <Slider {...settings} >
        {props?.question && props?.question.map((el) => {

          if (el?.userAnswer !== "") {
            return (
              <div key={el?.wordsId} style={{ width: "100%", padding: "auto" }}>
                <DailyQuizCard>
                  <QuestionRow style={{fontSize:"1.2rem"}}>Q. {el.question}</QuestionRow>
                  <AnsweredQuizAnswer>A. {el?.quizAnswer}</AnsweredQuizAnswer>
                  <AnsweredExplanation>{el?.explanation}</AnsweredExplanation>

                  <AnswerRow>
                    <AnsweredAnswerRow
                      style={{
                        backgroundColor: el?.userAnswer === "O"
                          ? el?.quizAnswer === "O"
                            ? "#3AB93F" : "#F85252" : "#FFFFFF",
                            marginBottom: "10px"

                      }}
                    >O</AnsweredAnswerRow>
                    <AnsweredAnswerRow
                      style={{
                        backgroundColor: el?.userAnswer === "X"
                          ? el?.quizAnswer === "X"
                            ? "#3AB93F" : "#F85252" : "#FFFFFF",
                            marginBottom: 'auto',
                      }}
                    >
                      X</AnsweredAnswerRow>
                  </AnswerRow>
                </DailyQuizCard>
              </div>

            );
          } else {
            return (  
              <div key={el?.wordsId} style={{ width: "100%", padding: "auto" }}>
                <DailyQuizCard>
                  <DailyQuizTitle>한 입 퀴즈</DailyQuizTitle>
                  <QuestionRow>{el.question}</QuestionRow>

                  <AnswerRow>
                    <AnswerButton
                      onClick={() => {
                        if (el?.wordsId) {
                          props?.setUserAnswerWordsId(el?.wordsId)
                          props?.setUserAnswer('O')
                        }

                      }}
                      style={{
                        marginBottom: "13px"
                      }}>O</AnswerButton>
                    <AnswerButton
                      onClick={() => {
                        if (el?.wordsId) {
                          props?.setUserAnswerWordsId(el?.wordsId)
                          props?.setUserAnswer('X')
                        }
                      }}
                    >X</AnswerButton>
                  </AnswerRow>

                </DailyQuizCard>
              </div>
            )
          }


        })}
      </Slider >
    </DailyQuizArea >

    // </div>



    // <>

    //   {props?.question && props?.question.map((el, index) => (
    //     <DailyQuizArea>
    //       <QuestionRow>{el.question}</QuestionRow>
    //       <AnswerRow>
    //         <AnswerButton>O</AnswerButton>
    //         <AnswerButton>X</AnswerButton>
    //       </AnswerRow>

    //     </DailyQuizArea>
    //   ))
    //   }
    // </>



  );
};

export default DailyQuiz;