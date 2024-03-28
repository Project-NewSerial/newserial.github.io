import styled from "@emotion/styled";

export const Container = styled.div`
  label: container;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  label: content;
  width: 100%;
  height: 100vh;
  max-width: 480px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  box-sizing: border-box;
  font-family: NanumSquareNeo;
  font-size: 14px;
`;

export const Logo = styled.div`
  label: logo;
  font-family: Bangers;
  color: #ff6f4f;
  font-size: 30px;
  margin-top: 100px;
`;

export const Text = styled.div`
  label: text;
  color: white;
  font-family: Noto Sans Kr;
  margin-top: 50px;
  font-weight: 300;
  font-size: 1.2rem;
`;

export const InputContent = styled.div`
  label: input-content;
  width: 100%;
  margin-top: 50px;
`;

export const InputBox = styled.div`
  label: input-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 20px;
  position: relative;
`;

export const InputText = styled.div`
  label: input-text;
  color: white;
`;

export const Input = styled.input`
  label: input;
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
  label: button;
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
