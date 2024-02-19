import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setToken } from "../../modules/auth";
import { useState } from "react";
import axios from "axios";
import {
  Container,
  Logo,
  InputContent,
  InputBox,
  InputText,
  Input,
  Button,
  BottomText,
  Content,
  ColorText,
} from "./styles";
import { useMutation } from '@tanstack/react-query';

/**
 * 로그인 페이지
 * @author 신정은
 */
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({ email: "", password: "" });
  const { email, password } = inputs;

  /**
   * 로그인하는 함수
   * @param {string} email 이메일
   * @param {string} password 비밀전호
   */
  const login = async () => {
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_API}/login`, {
        email: email,
        password: password,
      });
      dispatch(setToken(data.accessToken));
      navigate("/");
    } catch (error: any) {
      alert("입력하신 정보를 다시 확인해주세요.");
    }
  };

  //소셜로그인 함수
  const naverLogin = async () => {
    const url = `${process.env.REACT_APP_API}/oauth2/authorization/naver`;
    try {
      window.location.href = new URL(url, window.location.origin).href;
    } catch (error: any) {
      console.log(error);
    }
  };

  const { mutate: loginMutate } = useMutation({
    mutationFn: login,
  });
  const { mutate: naverLoginMutate } = useMutation({
    mutationFn: naverLogin,
  });

  /**
   * inputs 변경 함수
   * @param {React.ChangeEvent<HTMLInputElement>} e 이벤트
   */
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
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
        </InputContent>
        <ColorText onClick={()=>navigate('/temp-password')}>비밀번호를 잊어버리셨나요?</ColorText>
        <Button onClick={() => loginMutate()}>로그인</Button>
        <BottomText>
          Newserial 회원이 아니신가요? &nbsp;
          <span onClick={() => navigate("/signup")}>회원가입 하기</span>
        </BottomText>
        <img
          src="/assets/images/btnD_완성형.png"
          width={150}
          onClick={() => naverLoginMutate()}
        />
      </Content>
    </Container>
  );
};

export default Login;
