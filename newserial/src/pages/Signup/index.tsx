import React, { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

import {
  Container,
  Logo,
  InputContent,
  InputBox,
  InputText,
  Input,
  Button,
  ModalText,
  ModalInput,
  ModalButton,
  WarningText,
} from "./styles";

import Modal from "../../components/Modal/index";

const Signup = () => {
  const [toggle, setToggle] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    code: "",
    password: "",
    checkPassword: "",
  });
  const [isValid, setIsValid] = useState({
    emailFormat: false,
    emailConfirm: false,
    passwordFormat: false,
    passwordCheck: false,
  });
  const { email, code, password, checkPassword } = inputs;

  /**
   * email 형식 확인 함수
   * @author 신정은
   * @return boolean 이메일 형식이 올바르면 true 아니면 false
   */
  const emailFormatCheck = () => {
    const exp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (!exp.test(email)) setIsValid({ ...isValid, emailFormat: false });
    else setIsValid({ ...isValid, emailFormat: true });
  };

  /**
   * inputs 변경 함수
   * @author 신정은
   * @param e 이벤트
   */
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  /**
   * 메일 전송 api 호출 함수
   * @author 신정은
   * @param string email 이메일
   */
  const sendMail = async () => {
    const { data } = await axios.post(`${process.env.REACT_APP_API}/email`, {
      email: email,
    });
    return data;
  };

  /**
   * 인증번호 확인 api 호출 함수
   * @author 신정은
   * @param string email 이메일
   * @param string code 인증번호
   */
  const checkNumber = async () => {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API}/email-number`,
      {
        email: email,
        code: code,
      }
    );
    return data;
  };

  /**
   * 회원가입 api 호출 함수
   * @author 신정은
   * @param string email 이메일
   * @param string password 비밀번호
   */
  const signup = async () => {
    const { data } = await axios.post(`${process.env.REACT_APP_API}/signup`, {
      email: email,
      password: code,
    });
    return data;
  };

  const { mutate: sendMailMutate } = useMutation({
    mutationFn: sendMail,
  });

  const { mutate: checkNumberMutate } = useMutation({
    mutationFn: checkNumber,
  });

  const { mutate: signupMutate } = useMutation({
    mutationFn: checkNumber,
  });

  return (
    <>
      {toggle && (
        <Modal
          setToggle={setToggle}
          content={
            <>
              <ModalText>
                입력한 이메일로 전송된 인증번호를 입력해주세요.
              </ModalText>
              <ModalInput value={code} onChange={(e) => changeInput(e)} />
              <ModalButton onClick={() => checkNumberMutate}>인증</ModalButton>
            </>
          }
        />
      )}
      <Container>
        <Logo>NEWSERIAL</Logo>
        <InputContent>
          <InputBox>
            <InputText>이메일</InputText>
            <Input
              name="email"
              value={email}
              onChange={(e) => {
                changeInput(e);
                emailFormatCheck();
              }}
            />
            <div
              className="input-box__button"
              onClick={() => {
                setToggle(true);
                sendMailMutate();
              }}
            >
              인증
            </div>
            {email!==''&&!isValid.emailFormat && (
              <WarningText>이메일 형식이 올바르지 않습니다</WarningText>
            )}
          </InputBox>
          <InputBox>
            <InputText>비밀번호</InputText>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={(e) => changeInput(e)}
            />
          </InputBox>
          <InputBox>
            <InputText>비밀번호 확인</InputText>
            <Input
              type="password"
              name="checkPassword"
              value={checkPassword}
              onChange={(e) => changeInput(e)}
            />
          </InputBox>
        </InputContent>
        <Button>가입하기</Button>
      </Container>
    </>
  );
};

export default Signup;
