import { Container, Overlay, Content, Text, Button, Input } from "./styles";

interface Modal {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ setToggle }: Modal) => {
  return (
    <Container>
      <Overlay onClick={() => setToggle(false)}>
        <Content onClick={(e) => e.stopPropagation()}>
          <img
            src="/assets/icons/icon_cancel.svg"
            onClick={() => setToggle(false)}
          />
          <Text>입력한 이메일로 전송된 인증번호를 입력해주세요.</Text>
          <Input />
          <Button>인증</Button>
        </Content>
      </Overlay>
    </Container>
  );
};

export default Modal;
