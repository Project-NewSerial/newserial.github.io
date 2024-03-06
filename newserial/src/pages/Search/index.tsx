import { useEffect, useState } from "react";
import {
  Container,
  WordsArea,
} from "./styles";
import Header from "./component/Header";
import NewSerial from "./component/NewSerial/index";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import api from "../../api";
import { useNavigate } from "react-router-dom";

interface RootState {
  auth: {
    accessToken: null | string;
  };
}

interface Article {
  id: number;
  title: string;
  body: string;
  date: string;
  category: string;
}

interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: {
      empty: boolean;
      unsorted: boolean;
      sorted: boolean;
  };
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

interface Result {
  content: Article[];
  pageable: Pageable;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: {
      empty: boolean;
      unsorted: boolean;
      sorted: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

/**
 * 홈 페이지
 * @author 김민지
 */
const Search = () => { 
  const navigate=useNavigate();
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  const [searchWord, setSearchWord] = useState<string>('');
  const [searchResult, setSearchResult] = useState<Result>();

  /**
 * 검색 결과 get 함수
 * @
 */
  const getSearchResultNews = async () => {
    if (accessToken !== undefined&&searchWord.length>0) {
      try {
        const endcodedString=encodeURIComponent(searchWord);
        const { data } = await api.get(`/newserial/search?keyword=${endcodedString}`, {
          headers: {
            Authorization: accessToken,
          },
        })
        if (data !== undefined) {
          setSearchResult(data);
          navigate('/search-result', {state:{seachWord:searchWord, searchResult:searchResult}})
        }
      } catch (error) {
        console.log('에러가 발생했습니다.', error)
      }
    }
  };

  return (
    <Container>
      <Header searchWord={searchWord}
      setSearchWord={setSearchWord} 
      getSearchResultNews={getSearchResultNews} />
      <WordsArea>

      </WordsArea>

    </Container>
  );
};

export default Search;