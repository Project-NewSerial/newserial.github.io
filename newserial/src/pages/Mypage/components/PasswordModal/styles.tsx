import styled from "@emotion/styled";

export const Title = styled.div`
  font-family: Noto Sans KR;
  font-size: 1.6rem;
  font-weight: 600;
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const InputContent = styled.div`
  width: 100%;
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 10px;
  position: relative;
`;

export const InputText = styled.div`
  color: #242424;
`;

export const Input = styled.input`
  width: 100%;
  height: 20px;
  border: none;
  border-bottom: 1px solid #242424;
  font-family: NanumSquareNeo;
  font-size: 1.2rem;
  &::placeholder {
    font-size: 1rem;
  }
  &:focus {
    outline: none;
  }
`;

export const WarningText = styled.div`
  label: warning-text;
  color: red;
  font-size: 1rem;
  //margin-top: 2px;
`;

export const Button = styled.button`
  border: none;
  width: 50px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #ff6f4f;
  font-family: Noto Sans Kr;
  font-size: 1.4rem;
  &:disabled {
    opacity: 50%;
  }
`;
