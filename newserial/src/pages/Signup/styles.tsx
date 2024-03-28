import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 480px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  box-sizing: border-box;
  font-family: NanumSquareNeo;
  font-size: 1.4rem;
`;

export const Logo = styled.div`
  font-family: Bangers;
  color: #ff6f4f;
  font-size: 3rem;
`;

export const InputContent = styled.div`
  width: 100%;
  margin-top: 90px;
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 20px;
  position: relative;

  .input-box__button {
    width: 50px;
    height: 20px;
    border: 1px solid #ff6f4f;
    color: #ff6f4f;
    border-radius: 15px;
    font-family: Noto Sans KR;
    font-size: 1.2rem;
    position: absolute;
    right: 0;
    top: 17px;
    line-height: 5px;
    background-color: #000000;
    &:disabled {
      border-color: #a8a7a7;
      color: #a8a7a7;
    }
  }
`;

export const InputText = styled.div`
  color: white;
`;

export const Input = styled.input`
  width: 100%;
  height: 32px;
  border: none;
  border-bottom: 1px solid white;
  background-color: black;
  color: white;
  font-family: NanumSquareNeo;
  font-size: 1.4rem;
  color: white;
  &::placeholder {
    font-size: 1rem;
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid white;
  }
`;

export const WarningText = styled.div`
  label: warning-text;
  color: red;
  font-size: 1rem;
  margin-top: 5px;
`;

export const Button = styled.button`
  border: none;
  width: 75px;
  height: 30px;
  background-color: white;
  color: black;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
  font-family: NanumSquareNeo;
  &:disabled {
    opacity: 50%;
  }
`;

export const ModalText = styled.div`
  label: modal-text;
  width: 70%;
  word-break: keep-all;
  text-align: center;
  margin-bottom: 10px;
`;

export const ModalInput = styled.input`
  label: modal-input;
  height: 30px;
  width: 60%;
  border: none;
  border-bottom: 1px solid black;
  font-family: Noto Sans KR;
  &:focus {
    outline: none;
    border-bottom: 2px solid black;
  }
`;

export const ModalButton = styled.div`
  label: modal-button;
  width: 50px;
  height: 20px;
  border: 1px solid #ff6f4f;
  color: #ff6f4f;
  border-radius: 15px;
  font-family: Noto Sans KR;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 10px;
`;
