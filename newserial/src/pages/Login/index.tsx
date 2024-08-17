import { useNavigate } from "react-router";

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
import useLogin from "./Login.hook";
import { FC } from "react";

/**
 * 로그인 페이지
 * @author 신정은
 */
const Login: FC = () => {
  const navigate = useNavigate();
  const {
    handleLoginButtonClick,
    handleNaverLoginButtonClick,
    changeInput,
    inputs,
  } = useLogin();

  const { email, password } = inputs;

  return (
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
        <ColorText onClick={() => navigate("/temp-password")}>
          비밀번호를 잊어버리셨나요?
        </ColorText>
        <Button onClick={handleLoginButtonClick}>로그인</Button>
        <BottomText>
          Newserial 회원이 아니신가요? &nbsp;
          <span onClick={() => navigate("/signup")}>회원가입 하기</span>
        </BottomText>
        <img
          src="/assets/images/btnD_완성형.png"
          width={150}
          onClick={handleNaverLoginButtonClick}
        />
      </Content>
    </Container>
  );
};

export default Login;
