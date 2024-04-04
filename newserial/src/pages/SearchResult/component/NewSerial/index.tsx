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
}) => {
  const navigate = useNavigate();



  return (
    <NewSerialArea>
      <AreaTitleArea>
        <AreaTitle>뉴-시리얼</AreaTitle>
        <TitleToolTip src="/assets/icons/icon_tooltip.svg" />
      </AreaTitleArea>

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