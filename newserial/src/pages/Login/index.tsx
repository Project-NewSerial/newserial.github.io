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
} from "./styles";

/**
 * 로그인 페이지
 * @author 신정은
 */
const Login = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const { email, password } = inputs;

  /**
   * 로그인하는 함수
   * @param {string} email 이메일
   * @param {string} password 비밀전호
   */
  const login = async () => {
    const { data } = await axios.post(`${process.env.REACT_APP_API}/login`, {
      email: email,
      password: password,
    });
  };

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
      <Logo>NEWSERIAL</Logo>
      <InputContent>
        <InputBox>
          <InputText>이메일</InputText>
          <Input name="email" value={email} onChange={(e) => changeInput(e)} />
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
      <Button>로그인</Button>
      <BottomText>
        <div>회원가입</div>
        <div>&nbsp; | &nbsp;</div>
        <div>비밀번호 재설정</div>
      </BottomText>
      <img src="/assets/images/btnD_완성형.png" width={150} />
    </Container>
  );
};

export default Login;
