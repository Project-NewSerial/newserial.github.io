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

`;


export const DailyQuizTitle = styled.div`
  label: daily-quiz-title;
  position:absolute;
  color: #2E2E2E;
  font-size:1.6rem;
  font-family: NanumSquareNeo;
  font-weight: 500;
  top:145px;
  left:35%;
  right:35%;

  ${mediaQuery('desktop')}{
    display:none;
  }
`