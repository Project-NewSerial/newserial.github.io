import { useEffect } from "react";
import {
  DailyQuizArea,
  DailyQuizCard,
  DailyQuizTitle,
  QuestionRow,
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
}


const DailyQuiz = (props: { question: Quiz[] | undefined }) => {


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
      {/* <div style={{ width: "100%", }}> */}
        <Slider {...settings} >
          {props?.question && props?.question.map((el) => (
            <div  key={el?.wordsId} style={{ width: "100%",  padding: "auto" }}>

              <DailyQuizCard>
                <DailyQuizTitle>한 입 퀴즈</DailyQuizTitle>
                <QuestionRow>{el.question}</QuestionRow>
                <AnswerRow>
                  <AnswerButton style={{
                    marginBottom: "13px"
                  }}>O</AnswerButton>
                  <AnswerButton>X</AnswerButton>
                </AnswerRow>

              </DailyQuizCard>
            </div>
          ))}
        </Slider>
      </DailyQuizArea>

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