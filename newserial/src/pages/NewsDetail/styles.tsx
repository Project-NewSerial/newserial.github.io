import styled from "@emotion/styled";

const breakpoint="768px";

// 미디어 쿼리 유틸리티 함수 정의
const mediaQuery = () => `@media (min-width: ${breakpoint})`;

export const Container = styled.div`
  label: container;
  width: 100%;
  background: -webkit-linear-gradient(top, black 45%, white 45%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-family: NanumSquareNeo;
  font-size: 14px;
  padding-top:108px;
  ${mediaQuery()}{
    margin-bottom: 150px;
    padding-top: 0px;
    padding-right: 30px;
    padding-bottom: 0px
    padding-left: 30px;
  }
`;

export const HeaderArea=styled.div`
  label: header-area;
  display:block;
  padding-top: 57px;
  ${mediaQuery()}{
    display:flex;
    width:91.25%;
    flex-direction:column;
    margin-bottom: 133px;
  }

`

export const HeaderBox=styled.div`
  label: header-box;
  display:none;
  flex-direction: row;

  ${mediaQuery()}{
    width:100%;
    display:flex;
    flex-direction: row;  
    padding-bottom: 32px;
    border-bottom: 1px solid #D4D4D4;
  }
`

export const Logo=styled.div`
  label: logo;

  ${mediaQuery()}{
    color: #FF6F4F;
    font-size: 4rem;
    font-family:Bangers;
  }
`

export const SearchButton=styled.img`
  label: search-button;

  ${mediaQuery()}{
    width: 30px;
    margin-left:auto;
  }
`

export const MyPageButton=styled.img`
  label: mypage-button;

  ${mediaQuery()}{
    width: 30px;
    margin-left:22.44px; 
  }
`

export const NewsTitleArea=styled.div`
  label: news-title-area;
  width: 82%;
  position: absolute;
  top:57px;
  text-align: -webkit-left;

  ${mediaQuery()}{
    position:absolute;
    top:186px;
    display:flex;
    flex-direction:column;
  }

`

export const BookmarkButton=styled.img`
  label: bookmark-button;
  width:50px;
  margin-left:auto;
  margin-bottom:20px;
`

export const Genre=styled.div`
  label: genre;
  margin-right:auto;
  color: #FF6F4F;
  margin-bottom:3px;
  font-family: Noto Sans KR;
  font-size:1.8rem;
  ${mediaQuery()}{
  }
`

export const Title=styled.div`
  label: title; 
  margin-right:auto;
  color:#FFFFFF;
  margin-bottom:27px;
  font-size:1.8rem;
  font-weight:bold;
  ${mediaQuery()}{
  }
`

export const BookmarkIcon=styled.img`
  label: bookmark-icon;
  width: 20px;
  height: auto;
  position:absolute;
  top:0px;
  right: 20px;
  cursor:pointer;

  ${mediaQuery()}{
    width: 30px;
    height: auto;
    margin-left:auto;
    margin-right:50px;
  }

`

export const NewsArea=styled.div` 
  label: news-area;
  width: 82%;
  background-color:#FFFFFF;
  border: 1.5px solid #EEEEEE;
  border-radius:20px;
  display: flex;
  flex-direction: column;
  ${mediaQuery()}{
    width: 60%;
    background-color:#FFFFFF;
    border: 1.5px solid #EEEEEE;
    border-radius:50px;
    display: flex;
    flex-direction: column;
  }
`

export const MenuArea=styled.div`
  label: menu-area;
  display:flex;
  flex-direction:row;
  height:25px;
  margin-bottom:21px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top:25px;
  ${mediaQuery()}{
    display:flex;
    flex-direction:row;
    height:25px;
    margin-bottom:25px;
    margin-left: 50px;
    margin-top:25px;
  }
`

export const Speaker=styled.img`
  label: speaker;
  width:18px;
  height:18px;
  margin-right:2%;
  margin-top: auto;
  margin-bottom: auto;
  cursor:pointer;
`

export const ParaphraseArea=styled.div`
  label: paraphrase-area;
  display:flex;
  height: 25px;
  flex-direction:row;
  height:25px;
  margin-left:auto;
  ${mediaQuery()}{
    margin-right:50px;
  }
`

export const Paraphrase=styled.div`
  label: paraphrase;
  font-family: Noto Sans KR;
  margin-top:auto;
  margin-right: 5px;
  margin-bottom: auto;

  ${mediaQuery()}{
    font-size: 1.4rem;
    margin-top:auto;
    margin-right: 5px;
    margin-bottom: auto;
  }
`

export const ParaphraseButton=styled.img`
  label: paraphrase-button;
  margin-top:auto;
  margin-bottom: auto;

  ${mediaQuery()}{   
  }
`

export const ParaphraseQuestionSentence=styled.span`
  label: paraphrase-question-sentence;
  background-color: #FFD4CA;

  ${mediaQuery()}{   
  }

`


export const ParaphraseQuestionResult=styled.div`
  label: paraphrase-question-result;
  background-color:#FF9A84;
  border-radius:5px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 25px;
  padding-bottom: 25px;
  margin-top: 11px;
  margin-bottom: 15px;


  ${mediaQuery()}{   
  }
`

export const NewsSentence=styled.span<{isToggleOn: boolean}>`
  label: news-sentence;
  pointer-events: ${(props)=>props.isToggleOn === true? "auto" : "none"};
  cursor: ${(props)=>props.isToggleOn === true ? "pointer" : "none"};


  ${mediaQuery()}{   
  }
`



export const NewsContent=styled.div`
  label: news-content;
  line-height:25px;
  text-align:left;
  margin-bottom:25px;
  margin-left: 20px;
  margin-right: 20px;
  ${mediaQuery()}{
    margin-left:50px;
    margin-right:50px;
    margin-bottom: 55px;
  }
`

export const Source=styled.span`
  label: source;
  margin-top:35px;
  color:#979797;
  font-size:12px;
  text-align:left;
  display:flex;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 21px;
  display:inline-block;

  ${mediaQuery()}{
    margin-left:50px;
    margin-right:50px;
  }
`

export const ClipButton=styled.div`
  label: clip-button;
  background-image:url("/assets/icons/icon_clip.svg");
  background-repeat:no-repeat;
  width:10px;
  height:10px;
  display:inline-block;
  vertical-align:middle;
  margin-left:4px;

  ${mediaQuery()}{
  }
`

export const PCQuizButton=styled.div`
  label: pc-quiz-button;
  margin-bottom:25px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top:25px;
  with:0px;
  display:none;
  cursor:pointer;
  ${mediaQuery()}{
    width: fit-content;
    font-size: 2rem;
    font-family: Bangers;
    color: #FFFFFF;
    background-color: #FF6F4F;
    border-radius:20px;
    margin-top: 57px;
    margin-right:50px;
    margin-left:auto;
    margin-bottom: 60px;
    padding: 9px 40px;
    display:flex;
  }
`

export const MobileQuizButton=styled.div`
  label: mobile-quiz-button;
  width: fit-content;
  font-size: 2rem;
  font-family: Bangers;
  color: #FFFFFF;
  background-color: #FF6F4F;
  border-radius:20px;
  margin-top: 57px;
  margin-right:auto;
  margin-left:auto;
  margin-bottom: 60px;
  padding: 9px 40px;
  cursor:pointer;
  
  ${mediaQuery()}{
    display:none;
  }
`
