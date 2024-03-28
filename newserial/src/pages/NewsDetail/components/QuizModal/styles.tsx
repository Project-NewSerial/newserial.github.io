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



export const QuizArea=styled.div`
  label: quiz-area;
  max-width: 250px;

  ${mediaQuery()}{
    max-width: 500px;

  }
`

export const Quiz=styled.div`
  label: quiz;
  color: #FF6F4F;
  font-family: Bangers;
  font-size: 3.5rem;
  margin-top: 10px;
  ${mediaQuery()}{
    
  }
`

export const Question=styled.div`
  label: question;
  font-family: Noto Sans KR;
  font-size: 1.6rem;
  margin-bottom: 8px;
  text-align: left;
  ${mediaQuery()}{
    
  }
`

export const Explanation=styled.div`
  label: explanation;
  ${mediaQuery()}{
      
  }
`

export const AnswerRow=styled.div`
  label: answer-row;
  background-color: #FFFFFF;
  border: 1px solid #D3D3D3;
  border-radius: 10px;
  color: #FF6F4F;
  font-size: 2rem;
  padding-top: 5px;
  padding-bottom: 5px;
  cursor:pointer;
  ${mediaQuery()}{
      
  }
`

export const AnsweredQuestion=styled.div`
  label: answered-question;
  width: 100%;
  border-radius: 10px;
  color: #000000;
  font-size: 1.4rem;
  font-family: Noto Sans KR;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: left;

  ${mediaQuery()}{
      
  }
`

export const AnsweredQuizAnswer=styled.div`
  label: answered-quiz-answer;
  width: 100%;
  color: #FF0000;
  font-size: 1.4rem;
  font-family: Noto Sans KR;
  text-align: left;

  ${mediaQuery()}{
      
  }
`

export const AnsweredExplanation=styled.div`
  label: answered-explanation;
  width: 100%;
  color: #FF0000;
  font-size: 1.4rem;
  font-family: Noto Sans KR;
  text-align: left;
  margin-bottom: 15px;
  ${mediaQuery()}{
      
  }
`

export const AnsweredAnswerRow=styled.div`
  label: answered-answer-row;
  background-color: #FFFFFF;
  border: 1px solid #D3D3D3;
  border-radius: 10px;
  color: #D9D9D9;
  font-size: 2rem;
  padding-top: 5px;
  padding-bottom: 5px;
  cursor:auto;
  ${mediaQuery()}{
      
  }
`