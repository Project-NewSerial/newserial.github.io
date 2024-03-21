import styled from "@emotion/styled";

const breakpoint = "768px";
const mediaQuery = () => `@media(min-width:${breakpoint})`;

export const Container = styled.div`
  label: container;
  background-color: #ff6f4f;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;

  ${mediaQuery} {
    background-color: #000000;
  }
`;

export const Left = styled.div`
  label: left;
  visibility: hidden;
  cursor: pointer;

  ${mediaQuery} {
    visibility: visible;
    color: #ff6f4f;
    font-family: Bangers;
    font-size: 2.5rem;
  }
`;

export const Right = styled.div`
  label: right;
  font-family: Noto Sans KR;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`;
