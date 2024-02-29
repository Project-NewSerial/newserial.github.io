import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import api from "../../api";
import {
  Container,
  Info,
  Main,
  MainDetail,
  MainTitle,
  MainTop,
  Title,
  User,
  List,
  ListMid,
  NoData,
  ListRight,
  ListMidQuiz,
  Top,
  Underline,
} from "./styles";
import Header from "./components/Header";
import InfoModal from "./components/InfoModal";
import PasswordModal from "./components/PasswordModal";
import Tabs from "./components/Tabs";

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

interface BookmarkList {
  title: string;
  createdTime: string;
}

/**
 * 마이페이지
 * @author 신정은
 */
const Mypage = () => {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  const [selectedTab, setSelectedTab] = useState(0);
  const [infoToggle, setInfoToggle] = useState(false);
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [list, setList] = useState<
    Array<Array<QuizList> | Array<BookmarkList> | null>
  >([null, null]);

  const info = [
    [
      "퀴즈 기록은 30일 동안 저장됩니다.",
      "퀴즈 기록이 없습니다.",
      "/assets/icons/icon_Q.svg",
    ],
    [
      "북마크한 기사는 30일 동안 저장됩니다.",
      "북마크한 기사가 없습니다.",
      "/assets/icons/icon_bookmark.svg",
    ],
  ];

  //유저 정보 조회
  const getUserInfo = async () => {
    const { data } = await api.get(`/mypage`, {
      headers: {
        Authorization: `${accessToken}`,
      },
    });

    return data;
  };

  //펫 상태 조회
  const getPetInfo = async () => {
    if (selectedTab === 0) {
      const { data } = await api.get(`/mypage/pet`, {
        headers: {
          Authorization: `${accessToken}`,
        },
      });

      return data;
    }
  };

  //퀴즈 목록
  const getQuizList = async () => {
    if (selectedTab === 1) {
      const { data } = await api.get(`/mypage/quiz`, {
        headers: {
          Authorization: `${accessToken}`,
        },
      });

      if (data) {
        setList([
          [
            {
              quizQuestion: "공매도 전면 허용 vs. 전면 금지gdrgdrg",
              quizAnswer: "O",
              userAnswer: "X",
              createdTime: "2023/11/01",
            },
          ],
          null,
        ]);
      }
    }
  };

  //북마크 기사 목록
  const getBookmarkList = async () => {
    if (selectedTab === 2) {
      const { data } = await api.get(`/mypage/bookmark`, {
        headers: {
          Authorization: `${accessToken}`,
        },
      });

      if (data) {
        setList([
          null,
          [
            {
              title:
                "해외 법인 망했는데 5300억 '세금 폭탄' 골병드는 건설사ddddddddd",
              createdTime: "2023/11/01",
            },
          ],
        ]);
      }
    }
  };

  const { isLoading: userIsLoading, data: userInfo } = useQuery({
    queryKey: ["user", accessToken, selectedTab],
    queryFn: getUserInfo,
  });

  const { isLoading: petIsLoading, data: petInfo } = useQuery({
    queryKey: ["pet", accessToken, selectedTab],
    queryFn: getPetInfo,
  });

  const { isLoading: quizIsLoading, data: quizData } = useQuery({
    queryKey: ["quiz", selectedTab],
    queryFn: getQuizList,
  });

  const { isLoading: bookmarkIsLoading, data: bookmarkData } = useQuery({
    queryKey: ["bookmark", selectedTab],
    queryFn: getBookmarkList,
  });

  return (
    <Container>
      {passwordToggle && <PasswordModal setToggle={setPasswordToggle} />}
      <Header />
      <Top>
        <Title>MYPAGE</Title>
        <User>{userInfo?.email}</User>
        <Underline onClick={() => setPasswordToggle(!passwordToggle)}>
          비밀번호 재설정
        </Underline>
        <Tabs
          userInfo={userInfo}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </Top>
      {selectedTab === 0 ? (
        <Main>
          {infoToggle && <InfoModal setToggle={setInfoToggle} />}
          <MainTop selected={selectedTab === 0}>
            <Info onClick={() => setInfoToggle(!infoToggle)}>i</Info>
          </MainTop>
          <MainTitle>
            우유는{" "}
            <span className="main--highlight">{petInfo?.currentPet}</span>{" "}
            이에요
          </MainTitle>
          <img src={petInfo?.petImage} />
          <MainDetail>
            시리얼을 <span className="main--highlight">{petInfo?.count}</span>번
            더 먹으면
            <br />
            <span className="main--highlight">{petInfo?.nextPet}</span>이 될 수
            있어요.
            <img src={petInfo?.houseImage} />
          </MainDetail>
        </Main>
      ) : (
        <Main>
          <MainTop selected={selectedTab === 0}>
            <div className="main-top--small">{info[selectedTab - 1][0]}</div>
          </MainTop>
          {list[selectedTab - 1]?.length !== 0 ? (
            list[selectedTab - 1]?.map((el, index) => (
              <List border={list[selectedTab - 1]?.length === index + 1}>
                <img src={`${info[selectedTab - 1][2]}`} />
                {selectedTab === 1 ? (
                  <ListMid>
                    <div className="list-mid__quiz">
                      {(el as QuizList).quizQuestion}
                    </div>
                    <ListMidQuiz>
                      <div>나의 답 : {(el as QuizList).userAnswer}</div>
                      <div>질문 답 : {(el as QuizList).quizAnswer}</div>
                    </ListMidQuiz>
                  </ListMid>
                ) : (
                  <ListMid>
                    <div className="list-mid__bookmark">
                      {(el as BookmarkList).title}
                    </div>
                  </ListMid>
                )}
                <ListRight>{el.createdTime}</ListRight>
              </List>
            ))
          ) : (
            <NoData>{info[selectedTab - 1][1]}</NoData>
          )}
        </Main>
      )}
    </Container>
  );
};

export default Mypage;
