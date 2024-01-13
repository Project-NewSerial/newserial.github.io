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

const NewSerial = () => {



  return (
    <NewSerialArea>
      <AreaTitleArea>
        <AreaTitle>뉴-시리얼</AreaTitle>
        <TitleToolTip src="/assets/icons/icon_tooltip.svg" />
      </AreaTitleArea>
      <CategoryArea>
        <CategoryButton style={{borderBottom:"4px solid #FF6F4F", fontSize:"2rem", color: "#2E2E2E"}}>전체</CategoryButton>
        <CategoryButton>금융</CategoryButton>
        <CategoryButton>증권</CategoryButton>
        <CategoryButton>산업/재계</CategoryButton>
        <CategoryButton>중기/벤처</CategoryButton>
        <CategoryButton>부동산</CategoryButton>
      </CategoryArea>
      
      <NewsList>
        <NewsRow>
          <NewsPhoto src="/assets/dummyImages/dummyImage.jpg"/>
          <NewsDetailArea>
            <NewsOrigin>
              [ 조선비즈 ]
            </NewsOrigin>
            <NewsTitle>
            당정, R&D 예산 정책적 보완 공감대 형성…
            </NewsTitle>
          </NewsDetailArea>
        </NewsRow>
      </NewsList>

    </NewSerialArea>
  );
};

export default NewSerial;
