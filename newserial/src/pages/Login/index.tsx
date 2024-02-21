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

const Login = () => {
  return (
    <Container>
      <Logo>NEWSERIAL</Logo>
      <InputContent>
        <InputBox>
          <InputText>이메일</InputText>
          <Input />
        </InputBox>
        <InputBox>
          <InputText>비밀번호</InputText>
          <Input type="password" />
        </InputBox>
      </InputContent>
      <Button>로그인</Button>
      <BottomText>
        <div>회원가입</div>
        <div>&nbsp; | &nbsp;</div>
        <div>비밀번호 재설정</div>
      </BottomText>
      <img src="/assets/images/btnD_완성형.png" width={150}/>
    </Container>
  );
};

export default Login;
