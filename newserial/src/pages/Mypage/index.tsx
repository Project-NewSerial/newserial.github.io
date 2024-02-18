import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import {
  Container,
  Info,
  Main,
  MainDetail,
  MainTitle,
  MainTop,
  Tab,
  TabBox,
  TabLine,
  TabUnderline,
  Title,
  User,
  List,
  ListMid,
  NoData,
  ListRight,
  ListMidQuiz,
  Top,
  TabBoxUnderline,
  Underline,
} from "./sytles";
import Header from "./components/Header";
import InfoModal from "./components/InfoModal";
import PasswordModal from "./components/PasswordModal";

interface RootState {
  auth: {
    accessToken: null | string;
  };
}

interface UserInfo {
  email: string;
  currentPet: string;
  quizCount: number;
  bookmarkCount: number;
}

interface PetInfo {
  petImage: string;
  currentPet: string;
  houseImage: string;
  nextPet: string;
  count: number;
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
  const [passwordToggle, setPasswordToggle] = useState(true);
  const [list, setList] = useState<
    Array<Array<QuizList> | Array<BookmarkList> | null>
  >([null, null]);

  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const tabs = [
    { title: "우유 돌보기", value: userInfo?.currentPet },
    { title: "퀴즈 기록", value: userInfo?.quizCount },
    { title: "북마크한 기사", value: userInfo?.bookmarkCount },
  ];

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

  const [petInfo, setPetInfo] = useState<PetInfo | null>(null);

  useEffect(() => {
    if (accessToken) {
      getUserInfoMutate();
      getPetInfo();
    }
  }, [accessToken]);

  //유저 정보 조회
  const getUserInfo = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API}/mypage`, {
      headers: {
        Authorization: `${accessToken}`,
      },
    });

    if (data) setUserInfo(data);
  };

  //펫 상태 조회
  const getPetInfo = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API}/mypage/pet`,
      {
        headers: {
          Authorization: `${accessToken}`,
        },
      }
    );

    if (data)
      setPetInfo({
        petImage:
          "https://png.pngtree.com/png-vector/20230221/ourmid/pngtree-cute-dog-illustration-png-image_6612076.png",
        currentPet: "노숙견",
        houseImage:
          "https://png.pngtree.com/png-vector/20220707/ourmid/pngtree-thatched-house-traditional-korea-seongeup-png-image_5630464.png",
        nextPet: "흥부견",
        count: 4,
      });
  };

  //퀴즈 목록
  const getQuizList = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API}/mypage/quiz`,
      {
        headers: {
          Authorization: `${accessToken}`,
        },
      }
    );

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
  };

  //북마크 기사 목록
  const getBookmarkList = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API}/mypage/bookmark`,
      {
        headers: {
          Authorization: `${accessToken}`,
        },
      }
    );

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
  };

  const { mutate: getUserInfoMutate } = useMutation({
    mutationFn: getUserInfo,
  });

  const { mutate: getPetInfoMutate } = useMutation({
    mutationFn: getPetInfo,
  });

  const { mutate: getQuizListMutate } = useMutation({
    mutationFn: getQuizList,
  });

  const { mutate: getBookmarkListMutate } = useMutation({
    mutationFn: getBookmarkList,
  });

  const clickTab = (selected: number) => {
    setSelectedTab(selected);
    if (selected === 0) getPetInfoMutate();
    else if (selected === 1) getQuizListMutate();
    else getBookmarkListMutate();
  };

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
        <TabBox>
          {tabs.map((el, index) => (
            <>
              <Tab
                selected={selectedTab === index}
                onClick={() => clickTab(index)}
              >
                <div className="tab__text">{el.title}</div>
                <div className="tab__text">{el.value}</div>
                {selectedTab === index && <TabUnderline />}
              </Tab>
              {index !== 2 && <TabLine />}
            </>
          ))}
          <TabBoxUnderline />
        </TabBox>
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
