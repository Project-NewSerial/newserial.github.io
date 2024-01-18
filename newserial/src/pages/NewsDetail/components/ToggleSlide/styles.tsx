import styled from "@emotion/styled";

const breakpoint="768px";

// 미디어 쿼리 유틸리티 함수 정의
const mediaQuery = () => `@media (min-width: ${breakpoint})`;

type ToggleType = {
  isToggleOn: boolean;
}

export const ToggleButton=styled.div`
  label: toggle-button;
  ${mediaQuery()}{
    display:flex;
    z-index:0;


  }
`

export const CheckBox=styled.input`
  label: check-box;
  display:none;
`

export const ButtonLabel=styled.label`
  label: button-label;
  ${mediaQuery()}{
    z-index:10;
    width: 41px;
    height: 20px;
    border-radius: 30px;
    background-color: #D9D9D9;
  }
`