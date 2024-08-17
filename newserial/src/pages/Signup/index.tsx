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
import useSignup from "./Signup.hook";
import { FC } from "react";

const Signup: FC = () => {
  const {
    changeInput,
    navigate,
    handleModalClose,
    toggle,
    inputs,
    isValid,
    warningMessage,
    checkNumber,
    sendMail,
    submitRequirements,
    signup,
  } = useSignup();

  const { email, code, password, checkPassword } = inputs;

  return (
    <>
      {toggle && (
        <Modal
          onModalClose={handleModalClose}
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
              <ModalButton onClick={checkNumber}>인증</ModalButton>
            </>
          }
        />
      )}
      <Container>
        <Content>
          <Logo onClick={() => navigate("/")}>NEWSERIAL</Logo>
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
                onClick={sendMail}
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
          <Button disabled={!submitRequirements} onClick={signup}>
            가입하기
          </Button>
        </Content>
      </Container>
    </>
  );
};

export default Signup;
