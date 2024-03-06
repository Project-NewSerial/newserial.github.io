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


export const Container = styled.div`
  label: container;


`;

export const ResultArea = styled.div`
  label: result-area;
  width:60.75%;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
`

export const ResultTitle = styled.div`
  label: result-title;
  width: fit-content;
  font-family: Noto Sans KR;
  font-size: 2rem;
  margin-right; auto;
  padding-bottom: 12px;
  border-bottom: 2px solid #FF6F4F;
`

export const ResultWord = styled.span`
  label: result-word;
  font-family: Bangers;
  font-size: 2.5rem;
`

export const ResultRowArea = styled.div`
  label: result-row-area;
  margin-top: 20px;
`

export const ResultRow = styled.div`
  label: result-row;
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 0.5px solid #DCDCDC;
  padding-top: 10px;
  padding-bottom: 10px;

`

export const NewsImage = styled.img`
  label: news-image;
  width: 80px;
  height: 80px;
  object-fit: cover;
`

export const NewsInformation = styled.div`
  label: news-information;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 30px;
  margin-bottom: 10px;
`

export const NewsPress = styled.div`
  label: news-press;
  color: #575757;
  font-size: 1.2rem;
  font-family: Noto Sans KR;
`

export const NewsTitle = styled.div`
  label: news-title;
  color: #000000;
  font-size: 1.4rem;
  font-family: Noto Sans KR;
`