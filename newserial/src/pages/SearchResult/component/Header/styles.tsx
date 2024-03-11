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
  width:106.35px;
  height: 51px;
  color:#FF6F4F;
  font-size:30px;
  font-family: Bangers;
  cursor: pointer;

  ${mediaQuery('desktop')}{
    width: 141.8px;
    height: 40px;
    font-size: 4rem;
    margin : auto;
  }
`

export const SearchSection = styled.div`
  label: search-section;
  display: flex;
  flex-direction: column;
`

export const SearchArea = styled.input`
  label: searach-area;
  width: 60%;
  height: 2.5rem;
  color: #D9D9D9;
  font-size: 1.8rem;
  font-family: Noto Sans KR;
  background-color: transparent;
  border: none;
  margin-left: 50px;
  resize:none;
  overflow: hidden;

  :focus {
    outline:none;
  }

  ${mediaQuery('desktop')}{
    margin: auto;
  }
`

export const RelatedWordsArea = styled.div`
  label: related-words-area;
  width: 60%;
  margin-left: 25px;
  position: absolute;
  top:82px;
  background-color: #000000;
  opacity: 80%;
  padding-top: 16px;
  padding-bottom: 14px;
  padding-left: 10px;
  padding-right: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top: 1.5px solid black;
  
`

export const RelatedWordRow = styled.div`
  label: related-word-row;
  with: -webkit-fill-available;
  color: white;
  font-family: Noto Sans KR;
  font-size: 1.4rem;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 6px;
  text-align: left;
  white-space: nowrap;
  ovrflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`

export const RelatedWordSearch = styled.img`
  label: related-word-search;
  width: 12px;
  height: 12px;
  margin-right: 10px;
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
