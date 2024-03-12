import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import api from "../../api";
import {
  Container,
  Main,
  MainTop,
  Title,
  User,
  Top,
  Underline,
} from "./styles";
import Header from "./components/Header";
import PasswordModal from "./components/PasswordModal";
import Tabs from "./components/Tabs";
import PetContent from "./components/PetContent";
import QuizList from "./components/QuizList";
import BookmarkList from "./components/BookmarkList";

interface RootState {
  auth: {
    accessToken: null | string;
  };
}

/**
 * 마이페이지
 * @author 신정은
 */
const Mypage = () => {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  const [selectedTab, setSelectedTab] = useState(0);
  const [passwordToggle, setPasswordToggle] = useState(false);

  const info = [
    "퀴즈 기록은 30일 동안 저장됩니다.",
    "북마크한 기사는 30일 동안 저장됩니다.",
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

  const { isLoading, data: userInfo } = useQuery({
    queryKey: ["user", accessToken, selectedTab],
    queryFn: getUserInfo,
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
        <PetContent />
      ) : (
        <Main>
          <MainTop>
            <div className="main-top--small">{info[selectedTab - 1]}</div>
          </MainTop>
          {selectedTab === 1 ? <QuizList /> : <BookmarkList />}
        </Main>
      )}
    </Container>
  );
};

export default Mypage;
