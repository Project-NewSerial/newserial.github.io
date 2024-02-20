import React from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { Container, Left, Right } from "./styles";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

/**
 * Mypage의 Header 컴포넌트
 * @author 신정은
 */
interface RootState {
  auth: {
    accessToken: null | string;
  };
}

const Header = () => {
  const navigate = useNavigate();

  const accessToken = useSelector((state: RootState) => state.auth.accessToken);

  //logout api 호출
  const logout = async () => {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API}/logout`,
      {},
      {
        headers: {
          Authorization: `${accessToken}`,
        },
        withCredentials: true,
      }
    );

    if (data.message === "home") navigate("/");
  };

  const { mutate: logoutMutate } = useMutation({
    mutationFn: logout,
  });

  return (
    <Container>
      <Left onClick={() => navigate("/")}>NEWSERIAL</Left>
      <Right onClick={() => logoutMutate()}>로그아웃</Right>
    </Container>
  );
};

export default Header;
