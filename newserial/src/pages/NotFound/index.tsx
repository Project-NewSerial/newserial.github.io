import React from "react";
import { Button, Container, Detail, Title } from "./styles";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>Page Not Found</Title>
      <Detail>페이지를 찾을 수 없습니다.</Detail>
      <Button onClick={() => navigate("/")}>Home</Button>
    </Container>
  );
};

export default NotFound;
