import React from "react";
import Modal from "../../../../components/Modal";
import { Bottom, Main, MainText, Title } from "./styles";

interface propsType {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * @author 신정은
 */
const InfoModal = ({ setToggle }: propsType) => {
  const rank = [
    "노숙견 : 0~5번",
    "양반견 : 31~40번",
    "흥부견 : 6~10번",
    "황제견 : 41번~",
    "평민견 : 11~30번",
  ];

  return (
    <Modal
      setToggle={setToggle}
      content={
        <>
          <Title>최근 30일 기준</Title>
          <Main>
            {rank.map((el) => (
              <MainText>{el}</MainText>
            ))}
          </Main>
          <Bottom>퀴즈 정답을 맞히면 시리얼을 한 번 더 먹을 수 있어요</Bottom>
        </>
      }
    />
  );
};

export default InfoModal;
