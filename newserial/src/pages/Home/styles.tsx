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


export const Container = styled.div`
  label: container;
  // width: 100%;
  // background: -moz-linear-gradient(top, black 57.3%, white 57.3%);
  // background: -webkit-linear-gradient(top, black 57.3%, white 57.3%);
  // background: linear-gradient(to bottom, black 57.3%, white 57.3%);  
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  // padding: 0 30px;
  // box-sizing: border-box;
  // font-family: NanumSquareNeo;
  // font-size: 14px;
`;


export const DailyQuizTitle = styled.div`
  label: daily-quiz-title;
  position:absolute;
  color: #2E2E2E;
  font-size:1.6rem;
  top:157px;
  left:35%;
  right:35%;

  ${mediaQuery('desktop')}{
    display:none;
  }
`