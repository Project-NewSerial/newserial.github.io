import styled from "@emotion/styled";

const breakpoint="768px";

// 미디어 쿼리 유틸리티 함수 정의
const mediaQuery = () => `@media (min-width: ${breakpoint})`;

type ToggleType = {
  isToggleOn: boolean;
}

export const ToggleButton=styled.div<{isToggleOn:boolean}>`
  label: toggle-button;    
  display:flex;
  width: 33px;
  height: 16px;
  display:flex;
  border-radius: 30px;
  background-color: ${(props)=> props?.isToggleOn===true?"#D9D9D9" : "#AFAFAF"};
  z-index:0;
  margin-top:auto;
  margin-bottom: auto;
  ${mediaQuery()}{
    display:flex;
    width: 33px;
    height: 16px;
    display:flex;
    border-radius: 30px;
    background-color: ${(props)=> props?.isToggleOn===true?"#D9D9D9" : "#AFAFAF"};
    z-index:0;
  }
`

export const CheckBox=styled.input`
  label: check-box;
  display:none;
`

export const ButtonLabel=styled.label<{isToggleOn:boolean}>`
  label: button-label;
  width: 17px;
  height: 16px;
  border-radius: 30px;
  background-color:${(props)=> props?.isToggleOn===true?"#FF6F4F" : "#7E7E7E"};
  margin-left: ${(props)=> props?.isToggleOn===true?"auto" : "0px"};
  margin-right: ${(props)=> props?.isToggleOn===true? "0px":"auto"};

  z-index:10;
  ${mediaQuery()}{
    z-index:10;
    width: 17px;
    height: 16px;
    border-radius: 30px;
    background-color:${(props)=> props?.isToggleOn===true?"#FF6F4F" : "#7E7E7E"};
  }
`