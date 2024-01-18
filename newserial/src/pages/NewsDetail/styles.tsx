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
  padding-top:165px;
  ${mediaQuery()}{
    margin-bottom: 150px;
    padding: 0 30px;

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
    margin-top:53px;
    margin-bottom: 108px;
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
    margin-bottom: 45px;
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
  top:0px;

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
  border-radius:50px;
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
  margin-bottom:25px;
  margin-left: 50px;
  margin-top:25px;
`

export const Speaker=styled.img`
  label: speaker;
  width:30px;
  height:30px;
  margin-right:2%;
`

export const ParaphraseArea=styled.div`
  label: paraphrase-area;
  display:flex;
  flex-direction:row;
  margin-left:auto;
  ${mediaQuery()}{
    margin-right:50px;


  }
`

export const Paraphrase=styled.div`
  label: paraphrase;
  font-family: Noto Sans KR;
  ${mediaQuery()}{
    font-size: 1.4rem;


  }
`

export const ParaphraseButton=styled.img`
  label: paraphrase-button;


  ${mediaQuery()}{
    


  }
`

export const NewsContent=styled.div`
  label: news-content;
  line-height:25px;
  text-align:left;
  ${mediaQuery()}{
    margin-left:50px;
    margin-right:50px;
    margin-bottom: 125px;


  }
`

export const Source=styled.div`
  label: source;
  margin-top:35px;
  color:#979797;
  font-size:12px;
  text-align:left;
  display:flex;
  ${mediaQuery()}{
    margin-left:50px;
    margin-right:50px;
    
  }
`

export const ClipButton=styled.img`
  label: clip-button;
  width:3%;
  ${mediaQuery()}{
    margin-left:4px;
    display:inline;
    
  }
`

export const QuizButton=styled.div`
  label: quiz-button;
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



  }
`