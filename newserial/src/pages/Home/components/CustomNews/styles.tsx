import styled from "@emotion/styled";

// 미디어 쿼리에 사용할 디바이스 크기 정의
const breakpoints = {
  desktop: '768px',
  // desktop: '951px',
};

// 타입 정의
type Breakpoints = keyof typeof breakpoints;

// 미디어 쿼리 유틸리티 함수 정의
const mediaQuery = (breakpoint: Breakpoints) => `@media (min-width: ${breakpoints[breakpoint]})`;


export const CustomNewsArea = styled.div`
  label: custom-news-area;
  width:100%;
  height: 89px;
  background-color:blue;
  margin-top: 40px;
  margin-left:auto;
  margin-right:auto;
  align-items:center;

  ${mediaQuery('desktop')}{
    display:flex;
    width:60.75%;
    height: 104px;
    background-color:blue;
    margin-top: 12px;
  }
`;

export const NewsTitle = styled.div`
  label: custom-news-area;
  display:flex;
  flex-direction:column;
  width:100%;
  height: 89px;
  color: #FFFFFF;
  font-size: 1.6rem;
  background-color: #262424;
  opacity: 47%;
  position:absolute;
  justify-content:center;

  ${mediaQuery('desktop')}{
    width:60.75%;
    height: 104px;
    color: #FFFFFF;
    font-size: 2.5rem;
  }
`;