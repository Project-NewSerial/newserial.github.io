import styled from "@emotion/styled";

export const Container = styled.div`
  label: container;
  min-width: 360px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

export const Content = styled.div`
  label: content;
  min-width: 360px;
  max-width: 480px;
  width: 100%;
  height: 100vh;
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
  label: logo;
  font-family: Bangers;
  color: #ff6f4f;
  font-size: 30px;
`;

export const InputContent = styled.div`
  label: input-content;
  width: 100%;
  margin-top: 90px;
`;
export const InputBox = styled.div`
  label: input-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 20px;
`;

export const InputText = styled.div`
  label: input-text;
  color: white;
`;

export const Input = styled.input`
  label: input;
  width: 100%;
  height: 30px;
  border: none;
  border-bottom: 1px solid white;
  background-color: black;
  color: white;
  font-family: NanumSquareNeo;
  font-size: 1.4rem;
  color: white;

  &:focus {
    outline: none;
    border-bottom: 2px solid white;
  }
`;

export const ColorText = styled.div`
  label: color-text;
  width: 100%;
  color: #ff6f4f;
  font-family: Noto Sans KR;
  font-weight: 100;
  font-size: 1.2rem;
  display: flex;
  justify-content: end;
  margin-top: 5px;
`;
export const Button = styled.div`
  label: button;
  width: 75px;
  height: 30px;
  background-color: white;
  color: black;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
`;

export const BottomText = styled.div`
  label: botton-text;
  color: #ff6f4f;
  font-family: Noto Sans KR;
  font-weight: 100;
  font-size: 1.2rem;
  display: flex;
  margin-bottom: 30px;
  span{
    text-decoration: underline;
  }
`;
