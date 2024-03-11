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
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ToolTip from "../ToolTip";

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

const NewSerial = (props: {
  newSerialNews: NewSerialNews | undefined,
  newSerialNewsCategory: number,
  setNewSerialNewsCategory: React.Dispatch<React.SetStateAction<number>>
}) => {
  const navigate = useNavigate();



  return (
    <NewSerialArea>
      <AreaTitleArea>
        <AreaTitle>뉴-시리얼</AreaTitle>
        <ToolTip message={"뉴-시리얼은 하루에 ~~~~~~~~~~~~~~~~~~~~~~~~~~~"} />
        {/* <TitleToolTip src="/assets/icons/icon_tooltip.svg" /> */}
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