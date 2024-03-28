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
  Lists,
  Content,
} from "./styles";
import LoadingImage from "../../../../components/LoadingImage";
import { Container } from "../../styles";
import Pagination from "../../../../components/Pagination";

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
  const [page, setPage] = useState(0);

  //퀴즈 목록
  const getQuizList = async () => {
    const { data } = await api.get(`/mypage/quiz?page=${page}`, {
      headers: {
        Authorization: `${accessToken}`,
      },
    });

    return data;
  };

  const { isLoading, data } = useQuery({
    queryKey: ["quiz", accessToken, page],
    queryFn: getQuizList,
  });

  if (isLoading)
    return (
      <Content>
        <LoadingImage width={50} />
      </Content>
    );

  const { myQuizDtoList, totalQuizCount } = data;

  return (
    <Container>
      {totalQuizCount !== 0 ? (
        <Content>
          <Lists>
            {myQuizDtoList.map((el: QuizList, index: number) => (
              <List border={myQuizDtoList.length !== index + 1}>
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
          </Lists>
          <Pagination
            count={Math.floor(totalQuizCount / 10) + 1}
            page={page}
            setPage={setPage}
          />
        </Content>
      ) : (
        <NoData>퀴즈 기록이 없습니다.</NoData>
      )}
    </Container>
  );
};

export default QuizList;
