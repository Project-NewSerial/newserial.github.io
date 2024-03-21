import styled from "@emotion/styled";

const breakpoint = "768px";

const mediaQuery = () => `@media(min-width:${breakpoint})`;

export const List = styled.div<{ border: boolean }>`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e0e0e0;
  font-family: Noto Sans KR;
  padding: 10px;
  box-sizing: border-box;
  border-bottom: ${(props) => (props.border ? "1px solid #e0e0e0" : "none")};

  ${mediaQuery} {
    width: 92%;
    border-top: none;
  }
`;

export const ListLeft = styled.div`
  width: 80%;
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 1.4rem;

  img {
    margin-right: 10px;
  }
`;

export const ListText = styled.div`
  label: list-text;
  width: calc(100% - 50px);
`;

export const ListTextQuiz = styled.div`
  label: list-text-quiz;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: start;
`;

export const ListTextAnswer = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;

  div {
    margin-right: 10px;
  }
`;

export const ListRight = styled.div`
  width: 20%;
  color: #7f8386;
  font-size: 1.3rem;
`;

export const NoData = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  color: #7f8386;
  font-size: 2.5rem;
`;
