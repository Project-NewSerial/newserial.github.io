import React from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { Container, Left, Right } from "./styles";

/**
 * Mypage의 Header 컴포넌트
 * @author 신정은
 */
const Header = () => {
  return (
    <Container>
      <Left>NEWSERIAL</Left>
      <Right>로그아웃</Right>
    </Container>
  );
};

export default Header;
