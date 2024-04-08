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
  padding-top:31px;
  padding-left:20px;
  padding-right:20px;
  height: 51px;
  display: flex;
  flex-direction:row;
  border-bottom: 1.5px solid #FF6F4F;

  ${mediaQuery('desktop')}{
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const Logo = styled.div`
  label: logo;
  width:fit-content;
  color:#FF6F4F;
  font-size:30px;
  font-family: Bangers;
  cursor: pointer;
  
  ${mediaQuery('desktop')}{
    font-size: 4rem;
    margin : auto;
  }
`

export const SearchArea = styled.input`
  label: search-area;
  width: 70%;
  height: 2.5rem;
  color: #D9D9D9;
  font-size: 1.3rem;
  font-family: Noto Sans KR;
  background-color: transparent;
  border: none;
  margin-left: 10px;
  resize:none;
  overflow: hidden;
  

  :focus {
    outline:none;
  }

  ${mediaQuery('desktop')}{
    margin: auto;
    font-size: 1.8rem;
    margin-left: 50px;
  }
`


export const SearchIcon = styled.img`
  label: search-icon;
  width: 20px;
  height: 20px;
  margin-left:auto;
  cursor: pointer;
  
  ${mediaQuery('desktop')}{
    margin: auto;
  }
`

