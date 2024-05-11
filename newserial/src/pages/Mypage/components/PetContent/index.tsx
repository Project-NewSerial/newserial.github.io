import React, { useState } from "react";
import { Container, Detail, Info, Title, Top, LoadingContent } from "./styles";
import InfoModal from "../InfoModal";
import LoadingImage from "../../../../components/LoadingImage";
import useCommon from "../../../../hooks/queries/useCommon";

interface RootState {
  auth: {
    accessToken: null | string;
  };
}

const PetContent = () => {
  const [toggle, setToggle] = useState(false);

  //펫 상태 조회
  const { isLoading, data: petInfo } = useCommon(`/mypage/pet`);

  return (
    <Container>
      {isLoading ? (
        <LoadingContent>
          <LoadingImage width={30} />
        </LoadingContent>
      ) : (
        <>
          {toggle && <InfoModal setToggle={setToggle} />}
          <Top>
            <Info onClick={() => setToggle(!toggle)}>i</Info>
          </Top>
          <Title>
            우유는{" "}
            <span className="container--highlight">{petInfo?.currentPet}</span>{" "}
            이에요
          </Title>
          <img src={petInfo?.petImage} />
          {petInfo.currentPet === "임금견" ? (
            <Detail>
              <span className="container--highlight">최고 레벨</span>입니다.
            </Detail>
          ) : (
            <Detail>
              시리얼을{" "}
              <span className="container--highlight">{petInfo?.count}</span>
              번 더 먹으면
              <br />
              <span className="container--highlight">{petInfo?.nextPet}</span>이
              될 수 있어요.
              <img src={petInfo?.houseImage} />
            </Detail>
          )}
        </>
      )}
    </Container>
  );
};

export default PetContent;
