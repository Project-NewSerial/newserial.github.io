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
  width: 100%;
  overflow: hidden;
  margin-left: auto; 
  margin-right: auto;

  ${mediaQuery('desktop')}{
    position: absolute;
    top: 260px;
    
  }
`

export const DailyQuizCard = styled.div`
  label: daily-quiz-card;
  width:90.75%;
  background-color:#FF6F4F;
  margin-left:auto;
  margin-right:auto;
  position:relative;
  height: 276px;
  margin-top:85px;
  margin-bottom: auto;
  border-radius:15px;
  display:flex;
  flex-direction:column;
  box-shadow: 4px 4px 4px 4px #E0E0E0;

  ${mediaQuery('desktop')}{
    display:flex;
    width:65.75%;
    flex-direction:column;
    background-color:#FF6F4F;
    height: 317px;
    margin-top: auto;
    border-top-left-radius:60px;
    border-top-right-radius:60px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    align-items:center;
    box-shadow: none;
  }
`;


export const DailyQuizTitle = styled.div`
  label: daily-quiz-title;
  display: none;

  ${mediaQuery('desktop')}{
    display: block;
    color:#FFFFFF;
    font-size:3rem;
    font-family:Noto Sans KR;
    margin-top: auto;
  }
`

export const QuestionRow = styled.div`
  label: question-row;
  width: 81.48%;
  color: #FFFFFF;
  font-size: 1.8rem;
  font-family: Noto Sans KR;
  margin-top: auto;
  margin-left:auto;
  margin-right:auto;
  text-align: left;

  ${mediaQuery('desktop')}{
    color: #FFFFFF;
    font-size:2.4rem;
    font-family:Noto Sans KR;
    
  }

`

export const AnswerRow = styled.div`
  label: answer-row;
  display:flex;
  width: 81.48%;
  flex-direction:column;
  margin-top: 20px;
  margin-left:auto;
  margin-right:auto;
  margin-bottom:auto;
  
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