import styled from "@emotion/styled";

const breakpoint = "768px";

const mediaQuery = () => `@media(min-width:${breakpoint})`;

export const List = styled.div<{ border: boolean }>`
  label: list;
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
  label: list-left;
  width: 80%;
  font-size: 1.4rem;
  display: flex;
  justify-content: start;
  align-items: center;

  img {
    width: 20px;
    margin-right: 10px;
  }

  .list-left__bookmark {
    width: 100%;
    white-space: normal;
    height: fit-content;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    -webkit-box-pack: center;
    text-align: start;
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
