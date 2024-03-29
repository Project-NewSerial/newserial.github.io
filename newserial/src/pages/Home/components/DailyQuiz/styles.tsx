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

export const DailyQuizArea = styled.div`
  label: daily-quiz-area;
  width: 100%;
  overflow: hidden;
  margin-left: auto; 
  margin-right: auto;

  ${mediaQuery('desktop')}{
    position: absolute;
    top: 200px;
    
  }
`

export const DailyQuizCard = styled.div`
  label: daily-quiz-card;
  width:90.75%;
  background-color:#FF6F4F;
  margin-left:auto;
  margin-right:auto;
  position:relative;
  height: 256px;
  margin-top:60px;
  margin-bottom: auto;
  border-radius:15px;
  display:flex;
  flex-direction:column;
  box-shadow: 4px 4px 4px 4px #E0E0E0;

  img {
    position: absolute;
    right: 30px;
    top: 30px;
    cursor: pointer;
  }
  
  ${mediaQuery('desktop')}{
    display:flex;
    width:65.75%;
    flex-direction:column;
    background-color:#FF6F4F;
    height: 300px;
    margin-top: auto;
    border-top-left-radius:60px;
    border-top-right-radius:60px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    align-items:center;
    box-shadow: none;
    img {
      position: absolute;
      right: 40px;
      top: 40px;
      cursor: pointer;
    }
  }
`;


export const DailyQuizTitle = styled.div`
  label: daily-quiz-title;
  display: none;

  ${mediaQuery('desktop')}{
    display: block;
    color:#FFFFFF;
    font-size:2.2rem;
    font-family:NanumSquareNeo;
    margin-top: auto;
  }
`

export const QuestionRow = styled.div`
  label: question-row;
  width: 81.48%;
  color: #FFFFFF;
  font-size: 1.4rem;
  font-family: Noto Sans KR;
  margin-top: auto;
  margin-left:auto;
  margin-right:auto;
  text-align: left;

  ${mediaQuery('desktop')}{
    color: #FFFFFF;
    font-size:1.5rem;
    margin-top: auto;
    font-family:Noto Sans KR;
    
  }

`

export const AnsweredQuizAnswer = styled.div`
  label: answered-quiz-answer;
  width: 81.48%;
  color: #060000;
  font-size: 1.4rem;
  font-family: Noto Sans KR;
  margin-top: 12px;
  margin-left:auto;
  margin-right:auto;
  text-align: left;

  ${mediaQuery('desktop')}{
    color: #060000;
    font-size:1.5rem;
    font-family:Noto Sans KR;
    
  }
`

export const SeeExplanationButton = styled.div`
  label: see-explanation-button;
  width:81.48%;
  height: fit-content;
  color: #efefef;
  font-family: Noto Sans KR;
  font-size: 1.2em;
  text-decoration: underline;
  margin-top: 4px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  cursor:pointer;

  ${mediaQuery('desktop')}{
  
    
  }
  
`

export const AnsweredExplanation = styled.div`
  label: answered-explanation;
  width: 81.48%;
  color: #2e2e2e;
  font-size: 1.5rem;
  font-family: Noto Sans KR;
  margin-left:auto;
  margin-right:auto;
  text-align: left;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 2.5rem;

  ${mediaQuery('desktop')}{
    font-size:1.5rem;
    font-family:Noto Sans KR;
    
  }
`

export const AnsweredAnswerRow = styled.div`
  label: answered-answer-row;
  display:flex;
  width: 100%;
  height: 35px;
  color: #D9D9D9;
  font-size: 2rem;
  background-color:#E3E3E3;
  border: 1px solid #E3E3E3;
  border-radius:10px;
  align-items:center;
  justify-content:center;

    
  ${mediaQuery('desktop')}{
    display:flex;
    width: auto;
    color: #D9D9D9;
    font-size: 2rem;
    height: 35px;
    background-color:#E3E3E3;
    margin-bottom:11px;
    border: 1px solid #D3D3D3;
    border-radius:10px;
    align-items:center;
    justify-content:center;
  }
`



export const AnswerRow = styled.div`
  label: answer-row;
  display:flex;
  width: 81.48%;
  flex-direction:column;
  margin-top: 10px;
  margin-left:auto;
  margin-right:auto;
  margin-bottom:auto;
  
  ${mediaQuery('desktop')}{
    width: 81.48%%;
    margin-top:15px;
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
  cursor:pointer;

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