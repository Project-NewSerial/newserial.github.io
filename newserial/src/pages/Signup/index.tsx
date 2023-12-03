import React, { useState } from "react";

import {
  Container,
  Logo,
  InputContent,
  InputBox,
  InputText,
  Input,
  Button,
} from "./styles";

import Modal from "./components/Modal/index";

const Signup = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {toggle && <Modal setToggle={setToggle} />}
      <Container>
        <Logo>NEWSERIAL</Logo>
        <InputContent>
          <InputBox>
            <InputText>이메일</InputText>
            <Input />
            <div
              className="input-box__button"
              onClick={() => {
                setToggle(true);
                console.log(toggle);
              }}
            >
              인증
            </div>
          </InputBox>
          <InputBox>
            <InputText>비밀번호</InputText>
            <Input type="password" />
          </InputBox>
          <InputBox>
            <InputText>비밀번호 확인</InputText>
            <Input type="password" />
          </InputBox>
        </InputContent>
        <Button>가입하기</Button>
      </Container>
    </>
  );
};

export default Signup;
