import { useEffect } from "react";
import {
  NewSerialArea,
  AreaTitleArea,
  AreaTitle,
  TitleToolTip,
  CategoryArea,
  CategoryButton,
  NewsList,
  NewsRow,
  NewsPhoto,
  NewsDetailArea,
  NewsOrigin,
  NewsTitle,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ToolTip from "../ToolTip";

interface RootState {
  auth: {
    accessToken: null | string;
  };
}

interface NewSerialNews {
  totalNewsCount: number,
  newsListResponseDtos: [
    {
      id: number,
      category_id: number,
      title: string,
      body: string,
      image: string | null,
      press: string,
    }
  ]
}


interface Quiz {
  wordsId: number;
  question: string;
  userAnswer: string;
  quizAnswer: string;
  result: string;
  explanation: string;
}

const NewSerial = (props: {
  latestUpdate: string | undefined,
  question: Quiz[] | undefined,
  newSerialNews: NewSerialNews | undefined,
  newSerialNewsCategory: number,
  setNewSerialNewsCategory: React.Dispatch<React.SetStateAction<number>>
}) => {
  const navigate = useNavigate();


  return (
    <NewSerialArea question={props?.question}>
      <AreaTitleArea>
        <AreaTitle>뉴-시리얼</AreaTitle>
        <ToolTip message={props?.latestUpdate ? '마지막 업데이트 \n'+props?.latestUpdate : "뉴-시리얼 기사는\n네이버 뉴스 탭에서 받아오고 있습니다"} />
      </AreaTitleArea>
      <CategoryArea>
        <CategoryButton onClick={() => props?.setNewSerialNewsCategory(0)}
          style={props?.newSerialNewsCategory === 0 ?
            { borderBottom: "4px solid #FF6F4F", fontSize: "2rem", color: "#2E2E2E" }
            : {}}>전체</CategoryButton>
        <CategoryButton onClick={() => props?.setNewSerialNewsCategory(259)}
          style={props?.newSerialNewsCategory === 259 ?
            { borderBottom: "4px solid #FF6F4F", fontSize: "2rem", color: "#2E2E2E" }
            : {}}>금융</CategoryButton>
        <CategoryButton onClick={() => props?.setNewSerialNewsCategory(258)}
          style={props?.newSerialNewsCategory === 258 ?
            { borderBottom: "4px solid #FF6F4F", fontSize: "2rem", color: "#2E2E2E" }
            : {}}>증권</CategoryButton>
        <CategoryButton onClick={() => props?.setNewSerialNewsCategory(261)}
          style={props?.newSerialNewsCategory === 261 ?
            { borderBottom: "4px solid #FF6F4F", fontSize: "2rem", color: "#2E2E2E" }
            : {}}>산업/재계</CategoryButton>
        <CategoryButton onClick={() => props?.setNewSerialNewsCategory(771)}
          style={props?.newSerialNewsCategory === 771 ?
            { borderBottom: "4px solid #FF6F4F", fontSize: "2rem", color: "#2E2E2E" }
            : {}}>중기/벤처</CategoryButton>
        <CategoryButton onClick={() => props?.setNewSerialNewsCategory(260)}
          style={props?.newSerialNewsCategory === 260 ?
            { borderBottom: "4px solid #FF6F4F", fontSize: "2rem", color: "#2E2E2E" }
            : {}}>부동산</CategoryButton>
      </CategoryArea>

      <NewsList>
        {props?.newSerialNews !== undefined && props?.newSerialNews?.totalNewsCount > 0
          ? props?.newSerialNews.newsListResponseDtos.map((el) => (
            <NewsRow key={el.id} onClick={() => navigate('/newsdetail', { state: { newsId: el.id, newsCategoryId: el.category_id } })}>
              <NewsPhoto src={el.image ? el.image : "/assets/images/image_no_image.svg"} />
              <NewsDetailArea>
                <NewsOrigin>
                  [ {el.press} ]
                </NewsOrigin>
                <NewsTitle>
                  {el.title}
                </NewsTitle>
              </NewsDetailArea>
            </NewsRow>
          )) : <></>}

      </NewsList>

    </NewSerialArea>
  );
};

export default NewSerial;