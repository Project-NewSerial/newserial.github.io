import styled from "@emotion/styled";


// 미디어 쿼리에 사용할 디바이스 크기 정의
const breakpoints = {
  desktop: '768px',
};

// 타입 정의
type Breakpoints = keyof typeof breakpoints;

// 미디어 쿼리 유틸리티 함수 정의
const mediaQuery = (breakpoint: Breakpoints) => `@media (min-width: ${breakpoints[breakpoint]})`;


export const HeaderArea = styled.div`
  label: header-area;
  background-color:#000000;
  padding-top:61px;
  padding-left:20px;
  padding-right:20px;
  height: 51px;

  ${mediaQuery('desktop')}{
    height: 165px;
    padding-top: 152px;
  }
`;

export const Logo=styled.div`
  label: logo;
  width:fit-content;
  color:#FF6F4F;
  font-size:30px;
  font-family: Bangers;

  ${mediaQuery('desktop')}{
    font-size: 55px;
    margin-left:auto;
    margin-right:auto;
    border-bottom: 4px solid #FFCD29;
  }
`