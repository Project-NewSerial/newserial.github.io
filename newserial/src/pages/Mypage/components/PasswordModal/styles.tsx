import styled from "@emotion/styled";

const breakpoint = "768px";

const mediaQuery = () => `@media(min-width:${breakpoint})`;

export const Title = styled.div`
  label: title;
  font-family: Noto Sans KR;
  font-size: 1.8rem;
  font-weight: 600;
`;

export const Main = styled.div`
  label: main;
  width: 250px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  ${mediaQuery} {
    width: 300px;
  }
`;

export const InputContent = styled.div`
  label: input-content;
  width: 100%;
`;

export const InputBox = styled.div`
  label: input-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 10px;
  position: relative;
`;

export const InputText = styled.div`
  label: input-text;
  color: #242424;
  font-size: 1.4rem;
`;

export const Input = styled.input`
  label: input;
  width: 100%;
  height: 30px;
  border: none;
  border-bottom: 1px solid #242424;
  font-family: NanumSquareNeo;
  font-size: 1.2rem;

  &::placeholder {
    font-size: 1.2rem;
  }
  &:focus {
    outline: none;
  }
`;

export const WarningText = styled.div`
  label: warning-text;
  color: red;
  font-size: 1.2rem;
`;

export const Button = styled.button`
  label: button;
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
  margin-top: 20px;
  cursor: pointer;

  &:disabled {
    opacity: 50%;
  }
`;
