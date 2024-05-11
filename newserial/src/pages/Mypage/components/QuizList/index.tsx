import React, { useState } from "react";
import {
  Container,
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
import Pagination from "../../../../components/Pagination";
import useCommon from "../../../../hooks/queries/useCommon";

interface QuizList {
  quizQuestion: string;
  quizAnswer: string;
  userAnswer: string;
  createdTime: string;
}

const QuizList = () => {
  const [page, setPage] = useState(0);

  //퀴즈 목록
  const { isLoading, data } = useCommon(`/mypage/quiz?page=${page}`);

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
              <List border={myQuizDtoList.length === index + 1}>
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
