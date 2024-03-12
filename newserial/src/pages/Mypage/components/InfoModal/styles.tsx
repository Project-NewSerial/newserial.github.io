import styled from "@emotion/styled";

export const Title = styled.div`
  label: title;
  font-family: Noto Sans KR;
  font-size: 1.6rem;
  font-weight: 600;
`;

export const Main = styled.div`
  label: main;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  gap: 5px 20px;
  margin: 20px 0;
`;

export const MainText = styled.div`
  label: main-text;
  font-family: Noto Sans KR;
  font-size: 1.4rem;
  display: flex;
  justify-content: start;
`;

export const Bottom = styled.div`
  label: bottom;
  font-family: Noto Sans KR;
  font-size: 1.4rem;
  color: #ff6f4f;
  font-weight: 700;
`;
