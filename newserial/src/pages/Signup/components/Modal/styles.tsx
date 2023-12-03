import styled from "@emotion/styled";

export const Container = styled.div`
  label: container;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Overlay = styled.div`
  label: overlay;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Content = styled.div`
  label: content;
  width: 80%;
  height: 200px;
  background-color: white;
  font-family: Noto Sans KR;
  font-size: 14px;
  position: relative;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 99999;

  img {
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;

export const Text = styled.div`
  label: text;
  width: 70%;
  word-break: keep-all;
  text-align: center;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  label: input;
  height: 30px;
  border: none;
  border-bottom: 1px solid black;
  font-family: Noto Sans KR;
  margin-bottom: 10px;
  &:focus {
    outline: none;
    border-bottom: 2px solid black;
  }
`;

export const Button = styled.div`
  label: button;
  width: 50px;
  height: 20px;
  border: 1px solid #ff6f4f;
  color: #ff6f4f;
  border-radius: 15px;
  font-family: Noto Sans KR;
  font-size: 12px;
  text-align: center;
`;
