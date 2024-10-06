import React, { useState } from "react";
import api from "../../api/api";
import { useMutation } from "@tanstack/react-query";

import {
  Container,
  Logo,
  Text,
  InputContent,
  InputBox,
  InputText,
  Input,
  Button,
  WarningText,
  Content,
} from "./styles";

import { useNavigate } from "react-router-dom";
import useTempPassword from "./TempPassword.hook";

/**
 * 임시 비밀번호 발급받는 페이지
 * @author 신정은
 */
const TempPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const { emailCheck, setTempPasswordMutate, isValid, warningMessage } =
    useTempPassword();

  return (
    <>
      <Container>
        <Content>
          <Logo onClick={() => navigate("/")}>NEWSERIAL</Logo>
          <Text>
            입력하신 이메일로
            <br /> 임시 비밀번호가 발급됩니다.
            <br /> 마이페이지에서 비밀번호를 재설정 해주세요.
          </Text>
          <InputContent>
            <InputBox>
              <InputText>이메일</InputText>
              <Input
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  emailCheck(e.target.value);
                }}
              />
              {email !== "" && <WarningText>{warningMessage}</WarningText>}
            </InputBox>
          </InputContent>
          <Button
            disabled={!isValid}
            onClick={() => setTempPasswordMutate(email)}
          >
            전송
          </Button>
        </Content>
      </Container>
    </>
  );
};

export default TempPassword;
