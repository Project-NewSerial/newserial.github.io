import { useEffect, useState } from "react";
import {
  Container,
  HeaderArea,
  HeaderBox,
  Logo,
  SearchButton,
  MyPageButton,
  NewsTitleArea,
  Genre,
  Title,
  BookmarkIcon,
  NewsArea,
  MenuArea,
  Speaker,
  ParaphraseArea,
  Paraphrase,
  ParaphraseButton,
  NewsContent,
  Source,
  ClipButton,
  QuizButton,
} from "./styles";
import axios from "axios";
import ToggleSlide from "./components/ToggleSlide";
import { useSelector } from "react-redux";


interface RootState {
  auth: {
    accessToken: null | string;
  };
}

const NewsDetail = () => {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  const [isToggleOn, setIsToggleOn] = useState<boolean>(false);

  const getShortNews = async () => {
    await axios.get(`${process.env.REACT_APP_API}/short-news/2`,
      {
        headers:
        {
          withCredentials: true,
          'Content-Type': 'application/json',
          Authorization: accessToken,
        }
      })
      .then((res) =>
        console.log('res', res)
      )
  };

  const setBookmark = async () => {
    await axios.post(`${process.env.REACT_APP_API}/bookmark/2`, {},
      {
        headers:
        {
          withCredentials: true,
          'Content-Type': 'application/json',
          Authorization: accessToken,
        }
      })
      .then((res) => {
        console.log("북마크 설정 완료")
        console.log('res', res)
      }
      )
  };

  useEffect(() => {
    getShortNews();
  }, [])


  return (
    <Container>
      <HeaderArea>
        <HeaderBox>
          <Logo>NEWSERIAL</Logo>
          <SearchButton src="/assets/icons/icon_search.svg" />
          <MyPageButton src="/assets/icons/icon_mypage.svg" />
        </HeaderBox>



      </HeaderArea>
      <NewsArea>
        <NewsTitleArea>
          <Genre>경제</Genre>
          <Title>해외법인 망했는데 5300억 '세금 폭탄'... 골병드는 건설사</Title>
        </NewsTitleArea>
        <BookmarkIcon onClick={setBookmark} src="/assets/icons/icon_bookmark_N.svg" />
        <MenuArea>
          <Speaker src={"/assets/icons/icon_speaker.svg"} />
          <ParaphraseArea>
            <Paraphrase>쉬운 설명</Paraphrase>

            <ToggleSlide setIsToggleOn={setIsToggleOn} isToggleOn={isToggleOn} />


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

        <QuizButton>QUIZ</QuizButton>
      </NewsArea>

    </Container>
  );
};

export default NewsDetail;
