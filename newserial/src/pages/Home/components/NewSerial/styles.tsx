import styled from "@emotion/styled";

// 미디어 쿼리에 사용할 디바이스 크기 정의
const breakpoints = {
  desktop: '768px',
  // desktop: '951px',
};

const breakpoint = "768px";

// 타입 정의
type Breakpoints = keyof typeof breakpoints;

// 미디어 쿼리 유틸리티 함수 정의
const mediaQuery = () => `@media (min-width: ${breakpoint})`;


export const NewSerialArea = styled.div`
  label: new-serial-area;
  margin-top: 55px;
  margin-bottom: 100px;



  ${mediaQuery()}{
    display:flex;
    width:60.75%;
    flex-direction: column;
    height: 104px;
    margin-top: 330px;
    margin-left:auto;
    margin-right:auto;
    margin-bottom: 200px;
  }
`;


export const AreaTitleArea = styled.div`
  label: area-title-area;
  display:flex;
  flex-direction: row;
  margin-bottom: 15px;

  ${mediaQuery()}{
    display:flex;
    flex-direction: row;
    margin-right: auto;
    marign-bottom: 17px;
  }
`

export const AreaTitle = styled.div`
  label: area-title;
  color: #000000;
  font-size: 1.6rem;
  font-family: Noto Sans KR;
  margin-right:auto;
  margin-left:20px;

  ${mediaQuery()}{
    display:flex;
    font-size: 2.5rem;
    margin-left:23px;
    margin-right: 14px;
  
  }
`

export const TitleToolTip = styled.img`
  label: title-tooltip
  width: 15px;
  height: 15px;
  margin-right:20px;
  margin-top:auto;
  margin-bottom:auto;

  ${mediaQuery()}{

  }
`

export const CategoryArea = styled.div`
  label: category-area;
  display: flex;
  flex-direction: row;
  align-items:center;
  margin-left:20px;
  margin-right:20px;

  ${mediaQuery()}{
    margin-left:0px;
    margin-right:0px;
  }
`

export const CategoryButton = styled.div`
  label: category-button;
  font-size: 1.5rem;
  font-family: Noto Sans KR;
  color: #787878;
  padding: 4px 13px;
  cursor: pointer;

  ${mediaQuery()}{
    font-size: 1.5rem;
    padding: 10px 15px;
  }
`

export const NewsList = styled.div`
  label: news-list;
  display:flex;
  flex-direction:column;
  margin-left:20px;
  margin-right:20px;
  margin-top: 16px;

  ${mediaQuery()}{
    width:100%;
    margin-top: 12px;
    margin-left:0px;
    margin-right:0px;
  }
`

export const NewsRow = styled.div`
  label: news-row;
  display:flex;
  flex-direction:row;
  height: 89px;
  border-radius: 10px;
  box-shadow: 0px 1px 1px 1px #E0E0E0;
  cursor: pointer;
  margin-bottom: 10px;

  ${mediaQuery()}{
    height: 109px;
    width:100%;

  }
`

export const NewsPhoto = styled.img`
  label: news-photo;
  width: 25.59%;
  height: inherit;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-bottom-left-radius:10px;

  ${mediaQuery()}{
    width: 25.84%;
    object-fit: cover;
  }
`

export const NewsDetailArea = styled.div`
  label: news-detail-area;
  display:flex;
  flex-direction:column;
  width:calc(70% - 20px);
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 2.8%;
  margin-right: 2.8%;
  text-align: left;

  ${mediaQuery()}{
  }
`

export const NewsOrigin = styled.div`
  label: news-origin;
  width: 100%;
  font-family: Noto Sans KR;
  color: #575757;
  font-size: 1rem;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: start;

  ${mediaQuery()}{
    font-size: 1.3rem;
    margin-bottom: 10px;

  }
`

export const NewsTitle = styled.div`
  label: news-title;
  width: 100%;
  font-size: 1.4rem;
  font-family: Noto Sans KR;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: start;

  ${mediaQuery()}{
    font-size: 1.6rem;

  }
`