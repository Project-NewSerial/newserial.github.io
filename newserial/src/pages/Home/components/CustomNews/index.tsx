import { useEffect } from "react";
import {
  CustomNewsArea,
  NewsTitle,
} from "./styles";

interface MainQuizNews {
  id: number,
  title: string,
}

const CustomNews = (props:{mainQuizNews : MainQuizNews}) => {



  return (
    <CustomNewsArea>
      <NewsTitle>{props?.mainQuizNews.title}</NewsTitle>
    </CustomNewsArea>
  );
};

export default CustomNews;