import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import api from "../../../../api";
import {
  List,
  ListLeft,
  ListText,
  ListTextQuiz,
  ListTextAnswer,
  ListRight,
  NoData,
} from "./styles";

interface RootState {
  auth: {
    accessToken: null | string;
  };
}

interface QuizList {
  quizQuestion: string;
  quizAnswer: string;
  userAnswer: string;
  createdTime: string;
}

const QuizList = () => {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);

  //퀴즈 목록
  const getQuizList = async () => {
    const { data } = await api.get(`/mypage/quiz`, {
      headers: {
        Authorization: `${accessToken}`,
      },
    });

    return data;
  };

  const { data: quizData } = useQuery({
    queryKey: ["quiz"],
    queryFn: getQuizList,
  });

  if (quizData?.length !== 0) {
    return (
      <>
        {quizData?.map((el: QuizList, index: number) => (
          <List border={quizData.length === index + 1}>
            <ListLeft>
              <img src="/assets/icons/icon_Q.svg" />
              <ListText>
                <ListTextQuiz>{el.quizQuestion}</ListTextQuiz>
                <ListTextAnswer>
                  <div>나의 답 : {el.userAnswer}</div>
                  <div>질문 답 : {el.quizAnswer}</div>
                </ListTextAnswer>
              </ListText>
            </ListLeft>
            <ListRight>{el.createdTime}</ListRight>
          </List>
        ))}
      </>
    );
  } else {
    return <NoData>퀴즈 기록이 없습니다.</NoData>;
  }
};

export default QuizList;
