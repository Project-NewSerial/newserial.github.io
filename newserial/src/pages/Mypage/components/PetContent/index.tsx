import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { Container, Detail, Info, Title, Top } from "./styles";
import api from "../../../../api";
import InfoModal from "../InfoModal";

interface RootState {
  auth: {
    accessToken: null | string;
  };
}

const PetContent = () => {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  const [toggle, setToggle] = useState(false);

  //펫 상태 조회
  const getPetInfo = async () => {
    const { data } = await api.get(`/mypage/pet`, {
      headers: {
        Authorization: `${accessToken}`,
      },
    });

    return data;
  };

  const {data: petInfo } = useQuery({
    queryKey: ["pet", accessToken],
    queryFn: getPetInfo,
  });

  return (
    <Container>
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
      <Detail>
        시리얼을 <span className="container--highlight">{petInfo?.count}</span>
        번 더 먹으면
        <br />
        <span className="container--highlight">{petInfo?.nextPet}</span>이 될 수
        있어요.
        <img src={petInfo?.houseImage} />
      </Detail>
    </Container>
  );
};

export default PetContent;
