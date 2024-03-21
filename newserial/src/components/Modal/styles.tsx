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
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Box = styled.div`
  label: box;
  width: fit-content;
  height: fit-content;
  padding: 30px 30px;
  box-sizing: border-box;
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
    right: 15px;
    top: 15px;
    cursor: pointer;
  }
`;
