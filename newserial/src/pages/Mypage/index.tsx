import React, { useState } from "react";
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
} from "./sytles";
import Header from "./components/Header";

const Mypage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const userInfo = [
    { title: "우유 돌보기", value: "노숙견" },
    { title: "퀴즈 기록", value: "39" },
    { title: "북마크한 기사", value: "39" },
  ];
  const pet = {
    petImage:
      "https://png.pngtree.com/png-vector/20230221/ourmid/pngtree-cute-dog-illustration-png-image_6612076.png",
    currentPet: "노숙견",
    nextPet: "흥부견",
    count: 4,
  };

  return (
    <Container>
      <Header />
      <Title>MYPAGE</Title>
      <User>snow@naver.com</User>
      <TabBox>
        {userInfo.map((el, index) => (
          <>
            <Tab seleted={selectedTab === index}>
              <div>{el.title}</div>
              <div>{el.value}</div>
              {selectedTab === index && <TabUnderline />}
            </Tab>
            {index !== 2 && <TabLine />}
          </>
        ))}
      </TabBox>
      <Main>
        <MainTop>
          <Info>i</Info>
        </MainTop>
        <MainTitle>
          우유는 <span className="main--highlight">{pet.currentPet}</span>{" "}
          이에요
        </MainTitle>
        <img src={pet.petImage} />
        <MainDetail>
          시리얼을 <span className="main--highlight">{pet.count}</span>번 더
          먹으면
          <br />
          <span className="main--highlight">{pet.nextPet}</span>이 될 수 있어요.
          <img src="https://png.pngtree.com/png-vector/20220707/ourmid/pngtree-thatched-house-traditional-korea-seongeup-png-image_5630464.png" />
        </MainDetail>
      </Main>
    </Container>
  );
};

export default Mypage;
