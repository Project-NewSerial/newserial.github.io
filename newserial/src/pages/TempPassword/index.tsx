import React, { useState } from "react";
import api from "../../api";
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

/**
 * 임시 비밀번호 발급받는 페이지
 * @author 신정은
 */
const TempPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  /**
   * 이메일 형식이 올바른지 확인하는 함수
   * @param {string} value 입력값
   */
  const emailCheck = (value: string) => {
    const regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (!regExp.test(value)) {
      setIsValid(false);
      setWarningMessage("이메일 형식이 올바르지 않습니다.");
    } else {
      setIsValid(true);
      setWarningMessage("");
    }
  };

  /**
   * 임시 비밀번호 발급 받는 api 호출
   * @param {string} email 이메일
   */
  const getTempPassword = async () => {
    try {
      const { data } = await api.post(
        `/temp-password`,
        { email: email }
      );

      if (data) {
        alert(data);
        navigate("/login");
      }
    } catch (error: any) {
      alert("회원정보가 존재하지 않습니다.");
    }
  };

  const { mutate: getTempPasswordMutate } = useMutation({
    mutationFn: getTempPassword,
  });

  return (
    <>
      <Container>
        <Content>
          <Logo onClick={()=>navigate('/')}>NEWSERIAL</Logo>
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
          <Button disabled={!isValid} onClick={() => getTempPasswordMutate()}>
            전송
          </Button>
        </Content>
      </Container>
    </>
  );
};

export default TempPassword;
