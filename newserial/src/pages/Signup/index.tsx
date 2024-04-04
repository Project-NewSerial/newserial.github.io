import React, { useState } from "react";
import api from "../../api";
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
  Content,
} from "./styles";

import Modal from "../../components/Modal/index";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    code: "",
    password: "",
    checkPassword: "",
  });
  const [isValid, setIsValid] = useState({
    emailFormat: false,
    emailDuplication: false,
    emailCode: false,
    passwordFormat: false,
    passwordCheck: false,
  });
  const [warningMessage, setWarningMessage] = useState({
    email: "",
    password: "비밀번호 형식이 올바르지 않습니다.",
    checkPassword: "비밀번호가 일치하지 않습니다.",
    code: "",
  });
  const { email, code, password, checkPassword } = inputs;

  const submitRequirements =
    isValid.emailFormat &&
    isValid.emailCode &&
    isValid.passwordFormat &&
    isValid.passwordCheck;

  /**
   * 입력이 올바른지 확인하는 함수
   * @author 신정은
   * @param {string} type input name
   * @param {string} value input value
   *
   * @return {boolean} 올바르면 true 아니면 false
   */
  const inputCheck = (type: string, value: string) => {
    if (type === "email") {
      const regExp =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
      if (!regExp.test(value)) {
        setIsValid({ ...isValid, emailFormat: false });
        setWarningMessage({
          ...warningMessage,
          email: "이메일 형식이 올바르지 않습니다.",
        });
      } else {
        setIsValid({ ...isValid, emailFormat: true, emailCode: false });
        setWarningMessage({
          ...warningMessage,
          email: "",
        });
      }
    } else if (type === "password") {
      const regExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
      if (!regExp.test(value)) {
        setIsValid({
          ...isValid,
          passwordFormat: false,
        });
      } else {
        if (checkPassword !== value)
          setIsValid({
            ...isValid,
            passwordFormat: true,
            passwordCheck: false,
          });
        else setIsValid({ ...isValid, passwordCheck: true });
      }
    } else if (type === "checkPassword") {
      if (password !== value) setIsValid({ ...isValid, passwordCheck: false });
      else setIsValid({ ...isValid, passwordCheck: true });
    }
  };

  /**
   * inputs 변경 함수
   * @author 신정은
   * @param {React.ChangeEvent<HTMLInputElement>} e 이벤트
   */
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    inputCheck(name, value);
  };

  /**
   * 메일 전송 api 호출 함수(인증 버튼 클릭 시)
   * @author 신정은
   * @param {string} email 이메일
   */
  const sendMail = async () => {
    setInputs({ ...inputs, code: "" });
    const { data } = await api.post(`/email`, {
      email: email,
    });

    if (data === "해당 이메일로 가입된 회원이 존재합니다.") {
      setWarningMessage({ ...warningMessage, code: "", email: `${data}` });
    } else {
      setWarningMessage({ ...warningMessage, code: "" });
      setToggle(true);
    }
  };

  /**
   * 인증번호 확인 함수
   * @author 신정은
   */
  const checkNumber = async () => {
    const { data } = await api.post(
      `/email-number`,
      {
        email: email,
        code: code,
      }
    );
    if (data === "인증되었습니다.") {
      setIsValid({ ...isValid, emailCode: true });
      setToggle(false);
    } else {
      setIsValid({ ...isValid, emailCode: false });
      setWarningMessage({
        ...warningMessage,
        code: "인증번호가 올바르지 않습니다.",
      });
    }
  };

  /**
   * 회원가입 api 호출 함수
   * @author 신정은
   * @param {string} email 이메일
   * @param {string} password 비밀번호
   */
  const signup = async () => {
    const { data } = await api.post(`/members`, {
      email: email,
      password: password,
    });

    if (data.message === "회원가입이 성공적으로 완료되었습니다") {
      alert(`${data.message}`);
      navigate("/login");
    } else {
      setWarningMessage({ ...warningMessage, email: `${data.message}` });
      setIsValid({ ...isValid, emailFormat: false });
    }
  };

  const { mutate: sendMailMutate } = useMutation({
    mutationFn: sendMail,
  });

  const { mutate: checkNumberMutate } = useMutation({
    mutationFn: checkNumber,
  });

  const { mutate: signupMutate } = useMutation({
    mutationFn: signup,
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
              <ModalInput
                name="code"
                value={code}
                onChange={(e) => changeInput(e)}
              />
              {!isValid.emailCode && (
                <WarningText>{warningMessage.code}</WarningText>
              )}
              <ModalButton onClick={() => checkNumberMutate()}>
                인증
              </ModalButton>
            </>
          }
        />
      )}
      <Container>
        <Content>
          <Logo>NEWSERIAL</Logo>
          <InputContent>
            <InputBox>
              <InputText>이메일</InputText>
              <Input
                name="email"
                value={email}
                onChange={(e) => changeInput(e)}
              />
              <button
                className="input-box__button"
                onClick={() => sendMailMutate()}
                disabled={!isValid.emailFormat}
              >
                인증
              </button>
              {email !== "" && (
                <WarningText>{warningMessage.email}</WarningText>
              )}
            </InputBox>
            <InputBox>
              <InputText>비밀번호</InputText>
              <Input
                type="password"
                name="password"
                value={password}
                placeholder="영문, 숫자, 특수기호가 포함 8~20자"
                onChange={(e) => changeInput(e)}
              />
              {password !== "" && !isValid.passwordFormat && (
                <WarningText>{warningMessage.password}</WarningText>
              )}
            </InputBox>
            <InputBox>
              <InputText>비밀번호 확인</InputText>
              <Input
                type="password"
                name="checkPassword"
                value={checkPassword}
                onChange={(e) => changeInput(e)}
              />
              {checkPassword !== "" && !isValid.passwordCheck && (
                <WarningText>{warningMessage.checkPassword}</WarningText>
              )}
            </InputBox>
          </InputContent>
          <Button disabled={!submitRequirements} onClick={() => signupMutate()}>
            가입하기
          </Button>
        </Content>
      </Container>
    </>
  );
};

export default Signup;
