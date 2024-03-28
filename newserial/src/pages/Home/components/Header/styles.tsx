import styled from "@emotion/styled";


// 미디어 쿼리에 사용할 디바이스 크기 정의
const breakpoints = {
  desktop: '768px',
  // desktop: '565px',
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
  display: flex;
  flex-direction:row;

  ${mediaQuery('desktop')}{
    height: 165px;
    padding-top: 102px;
  }
`;

export const Logo = styled.div`
  label: logo;
  height:fit-content;
  width:fit-content;
  color:#FF6F4F;
  font-size:30px;
  font-family: Bangers;

  ${mediaQuery('desktop')}{
    font-size: 55px;
    margin-left:auto;
    margin-right:auto;
    border-bottom: 2px solid #FFCD29;
  }
`

export const SearchIcon = styled.img`
  label: search-icon;
  width: 20px;
  height: 20px;
  margin-left:auto;
  cursor: pointer;

  ${mediaQuery('desktop')}{
    position: absolute;
    top: 26px;
    right: 50px;
  }
`

export const MyPageIcon = styled.img`
  label: mypage-icon;
  width: 20px;
  height: 20px;
  margin-left:20px;
  cursor: pointer;

  ${mediaQuery('desktop')}{
    position: absolute;
    top: 26px;
    right: 90px;
  }
`

export const LoginSignup = styled.div`
  label: login-signup;
  margin-left: auto;
  display:flex;
  flex-direction:row;

  ${mediaQuery('desktop')}{
    display:flex;
    flex-direction:row;
    position: absolute;
    top: 26px;
    right: 50px;
  }
`

export const LoginButton = styled.div`
  label: login-button;
  color: #FF6F4F;
  font-size: 1.4rem;
  margin-left: auto;
  margin-right: 10px;
  cursor:pointer;

  ${mediaQuery('desktop')}{

  }
`

export const SignupButton = styled.div`
  label: signup-button;
  color: #FF6F4F;
  font-size: 1.4rem;
  cursor:pointer;

  ${mediaQuery('desktop')}{
  
  }
`

