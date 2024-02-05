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


export const DailyQuizArea = styled.div`
  label: daily-quiz-area;
  width:60.75%;
  background-color:#FF6F4F;
  margin-left:auto;
  margin-right:auto;
  position:relative;
  height: 256px;
  margin-top:76px;
  border-radius:15px;
  display:flex;
  flex-direction:column;

  ${mediaQuery('desktop')}{
    display:flex;
    flex-direction:column;
    background-color:#FF6F4F;
    height: 317px;
    margin-top: -50px;
    border-top-left-radius:60px;
    border-top-right-radius:60px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    align-items:center;
  }
`;

export const DailyQuizTitle = styled.div`
  label: daily-quiz-title;
  position:absolute;
  color: #2E2E2E;
  font-size:1.6rem;
  top:-25px;
  left:35%;
  right:35%;

  ${mediaQuery('desktop')}{
    color:#FFFFFF;
    font-size:3rem;
    font-family:Noto Sans KR;
    margin-top: 42px;
  }
`

export const QuestionRow = styled.div`
  label: question-row;
  color: #FFFFFF;
  font-size: 2rem;
  font-family: Noto Sans KR;
  margin-top: 83px;

  ${mediaQuery('desktop')}{
    color: #FFFFFF;
    font-size:2.4rem;
    font-family:Noto Sans KR;
    margin-top:107px;
  }

`

export const AnswerRow = styled.div`
  label: answer-row;
  display:flex;
  width: 81.48%;
  flex-direction:column;
  margin-top: 12px;
  margin-left:auto;
  margin-right:auto;
  
  ${mediaQuery('desktop')}{
    width: 74.42%;
    margin-top:33px;
  }
`

export const AnswerButton=styled.div`
  label: answer-button;
  display:flex;
  width: 100%;
  height:38px;
  color: #FF6F4F;
  font-size: 2rem;
  background-color:#FFFFFF;
  margin-bottom: 18px;
  border: 1px solid #E3E3E3;
  border-radius:10px;
  align-items:center;
  justify-content:center;

  ${mediaQuery('desktop')}{
    display:flex;
    width: auto;
    color: #FF6F4F;
    font-size: 2rem;
    height: 40px;
    background-color:#FFFFFF;
    margin-bottom:11px;
    border: 1px solid #D3D3D3;
    border-radius:10px;
    align-items:center;
    justify-content:center;
  }
`