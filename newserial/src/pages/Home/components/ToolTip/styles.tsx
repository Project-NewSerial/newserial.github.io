import styled from "@emotion/styled";


// 미디어 쿼리에 사용할 디바이스 크기 정의
const breakpoints = {
  desktop: '768px',
};

// 타입 정의
type Breakpoints = keyof typeof breakpoints;

// 미디어 쿼리 유틸리티 함수 정의
const mediaQuery = (breakpoint: Breakpoints) => `@media (min-width: ${breakpoints[breakpoint]})`;


export const ToolTipContainer = styled.div`
  label: tooltip-container;
  display: inline-block;
  position: relative;

  >img{
    margin-right: 20px;
  }

  &:hover > .tooltip,
  &:active > .tooltip {
    display: block;
  }
  
  .tooltip {
    white-space: pre-line;
    display: none;
    width: 200px;
    position: absolute;
    bottom: -48px;
    right: 20px;
    background-color: black;
    border: #black solid 1px;
    border-radius: 5px;
    color: #FF6F4F;
    font-size: 1.2rem;
    font-family: Noto Sans KR;
    height: auto;
    letter-spacing: -0.25px;
    padding: 8px 11px;
    z-index: 100;
  }

  .tooltip::after{
    border-color: black transparent;
    border-style: solid;
    border-width:0 6px 11px 6px;
    content: "";
    display: block;
    right: 2px;
    position: absolute;
    top: -7px;
    width: 0;
    z-index: 1;
  }

  .tooltip::before{
    content: "";
    display: block;
    right: 0px;
    transform: translateX(-50%);
    position: absolute;
    top: -8px;
    width: 0;
    z-index: 0;
  }

  ${mediaQuery('desktop')}{
    height: 165px;
    padding-top: 152px;
  }
`;
