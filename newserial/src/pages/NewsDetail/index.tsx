import { useEffect } from "react";
import {
  Container,
  HeaderArea,
  BookmarkButton,
  Genre,
  Title,
  NewsArea,
  MenuArea,
  Speaker,
  ParaphraseArea,
  Paraphrase,
  ParaphraseButton,
  NewsContent,
  Source,
  ClipButton,
} from "./styles";
import axios from "axios";

const NewsDetail = () => {

  const getQuiz = async () => {
   await axios.get(`${process.env.REACT_APP_API}/short-news/17`,
   {headers:
    {'Content-Type':'application/json',
    Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzcHJpbmdAbmF2ZXIuY29tIiwiaWF0IjoxNzAyNDc3MTU2LCJleHAiOjE3MDI0ODA3NTZ9.B6-pLecipEZcApxAQ9jR0A3Vnv8ny87Rq5mzifFAhRo',
  }})
   .then((res)=>
    console.log('res', res)
   )
  };



  useEffect(() => {
    getQuiz();
  }, [])

  return (
    <Container>
      <HeaderArea>
        <BookmarkButton src={"/assets/icons/icon_bookmark_N.svg"} />
        <Genre>경제</Genre>
        <Title>해외법인 망했는데 5300억 '세금 폭탄'... 골병드는 건설사</Title>
      </HeaderArea>
      <NewsArea>
        <MenuArea>
          <Speaker src={"/assets/icons/icon_speaker.svg"} />
          <ParaphraseArea>
            <Paraphrase>쉬운 설명</Paraphrase>
            {/*
             @todo
            토글 버튼 추가
            */}
            <ParaphraseButton />
          </ParaphraseArea>
        </MenuArea>
        <NewsContent>
          상당수 사업은 현지 법인이 있어야 참여할 수 있어 건설사들은 지사보다는 법인 설립을 선택했다.
          사우디 상법상 증자 등의 절차가 복잡해 자본금 납입 대신 자금 대여 형식으로 법인 규모를 키웠다.
          현지 법인과 자금 대여 계약만 체결하면 신속하게 자금을 수혈할 수 있다는 점도 건설사들이 자금 대여를 늘린 이유다.

          하지만 유가가 급락하기 시작하면서 신규 수주는 뚝 끊겼다. 2014년부터 8년간 사우디 정부의 재정수지가 적자를 이어가며 발주 여력이 줄어든 데 따른 것이다.
          2010년 470억달러에 이르던 국내 건설사들의 중동 수주 규모도 2019년에는 50억달러로 급감했다.
        </NewsContent>
        <Source>
          출처: [한국경제] 해외 법인 망했는데 5300억 '세금 폭탄'... 골병드는 건설사
          <ClipButton src={"/assets/icons/icon_clip.svg"} />
        </Source>
      </NewsArea>

    </Container>
  );
};

export default NewsDetail;