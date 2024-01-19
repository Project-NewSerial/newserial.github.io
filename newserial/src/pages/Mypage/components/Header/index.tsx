import React from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { Container, Left, Right } from "./styles";
import { useSelector } from "react-redux";

/**
 * Mypage의 Header 컴포넌트
 * @author 신정은
 */
const Header = () => {
  interface authStateType {
    accessToken: null | string;
  }
  //const accessToken = useSelector((state: authStateType) => state.accessToken);
  const accessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3amRkbXM5OTIxQGdtYWlsLmNvbSIsImlhdCI6MTcwNTY3NTA5NiwiZXhwIjoxNzA1Njc4Njk2fQ.gTh2XrmXW3uPQxKiF7CF39qFbND9ZwPkLS3Zts40KbM";
  //logout api 호출
  const logout = async () => {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API}/logout`,
      {
        header: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
      {
        withCredentials: true,
      }
    );
  };

  const { mutate: logoutMutate } = useMutation({
    mutationFn: logout,
  });

  return (
    <Container>
      <Left>NEWSERIAL</Left>
      <Right onClick={() => logoutMutate()}>로그아웃</Right>
    </Container>
  );
};

export default Header;
