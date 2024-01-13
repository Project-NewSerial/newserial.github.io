import styled from "@emotion/styled";

export const Container = styled.div`
  label: container;
  width: 100%;
  background: -moz-linear-gradient(top, black 57.3%, white 57.3%);
  background: -webkit-linear-gradient(top, black 57.3%, white 57.3%);
  background: linear-gradient(to bottom, black 57.3%, white 57.3%);  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  box-sizing: border-box;
  font-family: NanumSquareNeo;
  font-size: 14px;
`;

export const HeaderArea=styled.div`
  label: header-area;
  display:flex;
  width:82.1%;
  flex-direction:column;
  margin-top:53px;

`

export const BookmarkButton=styled.img`
  label: bookmark-button;
  width:5%;
  margin-left:auto;
  margin-bottom:20px;
`

export const Genre=styled.div`
  label: genre;
  margin-right:auto;
  color: #FF6F4F;
  margin-bottom:3px;
  font-family: Noto Sans KR;
  font-size:18px;
`

export const Title=styled.div`
  label: title; 
  margin-right:auto;
  color:#FFFFFF;
  margin-bottom:27px;
  font-size:18px;
  font-weight:bold;
`

export const NewsArea=styled.div` 
  label: news-area;
  width:85%;
  background-color:#FFFFFF;
  border: 1px solid #EEEEEE;
  border-radius:20px;
  display: flex;
  flex-direction: column;
  padding: 20px 5%;
`

export const MenuArea=styled.div`
  label: menu-area;
  width:100%;
  display:flex;
  flex-direction:row;
  margin-bottom:25px;
`

export const Speaker=styled.img`
  label: speaker;
  width:23px;
  height:23px;
  margin-right:2%;
`

export const ParaphraseArea=styled.div`
  label: paraphrase-area;
  display:flex;
  flex-direction:row;
  margin-left:auto;

`

export const Paraphrase=styled.div`
  label: paraphrase;
`

export const ParaphraseButton=styled.img`
  label: paraphrase-button;
`

export const NewsContent=styled.div`
  label: news-content;
  line-height:25px;
  text-align:left;
`

export const Source=styled.div`
  label: source;
  margin-top:35px;
  color:#979797;
  font-size:12px;
  text-align:left;
  display:flex;
`

export const ClipButton=styled.img`
  label: clip-button;
  width:3%;
`