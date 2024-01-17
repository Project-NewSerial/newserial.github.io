import styled from "@emotion/styled";

const breakpoint = "768px";
const mediaQuery = () => `@media(min-width:${breakpoint})`;

export const Container = styled.div`
  background-color: #ff6f4f;
  width: 100%;
  height: 70px;
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
  visibility: hidden;
  ${mediaQuery} {
    visibility: visible;
    color: #ff6f4f;
    font-family: Bangers;
    font-size: 3rem;
  }
`;

export const Right = styled.div`
  font-family: Noto Sans KR;
  color: white;
  font-size: 1.5rem;
`;
