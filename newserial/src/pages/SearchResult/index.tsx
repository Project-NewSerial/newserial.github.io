import { useEffect, useState } from "react";
import {
  Container,
  ResultArea,
  ResultTitle,
  ResultWord,
  ResultRowArea,
  ResultRow,
  NewsImage,
  NewsInformation,
  NewsPress,
  NewsTitle,



} from "./styles";
import Header from "./component/Header";
import NewSerial from "./component/NewSerial/index";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import api from "../../api";

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
const SearchResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { oldSearchWord, oldSearchResult } = location.state;
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  const [searchWord, setSearchWord] = useState<string>('');
  const [searchResult, setSearchResult] = useState<Result>();





  /**
 * 검색 결과 get 함수
 * @
 */
  const getSearchResultNews = async () => {
    if (accessToken !== undefined && searchWord.length > 0) {
      try {
        const endcodedString = encodeURIComponent(searchWord);
        const { data } = await api.get(`/newserial/search?keyword=${endcodedString}`, {
          headers: {
            Authorization: accessToken,
          },
        })
        if (data !== undefined) {
          setSearchResult(data);
        }
      } catch (error) {
        console.log('에러가 발생했습니다.', error)
      }
    }
  };


  useEffect(() => {
    setSearchWord(oldSearchWord);
    setSearchResult(oldSearchResult);

  }, [oldSearchWord, oldSearchResult])


  return (
    <Container>
      <Header searchWord={searchWord}
        setSearchWord={setSearchWord}
        getSearchResultNews={getSearchResultNews}
      />
      <ResultArea>
        <ResultTitle><ResultWord>'{searchWord}'</ResultWord> 검색 결과입니다.</ResultTitle>
        <ResultRowArea>
          {/* {searchResult?.content.map((el, index) => ( */}
            {/* <ResultRow key={el.id}> */}
            <ResultRow onClick={()=>navigate('/news-detail')}>
              <NewsImage src="/assets/dummyImages/dummyImage.jpg"/>
              <NewsInformation>
                <NewsPress>[조선비즈]</NewsPress>
                <NewsTitle>어쩌고</NewsTitle>
              </NewsInformation>

            </ResultRow>

          {/* ))} */}
        </ResultRowArea>


      </ResultArea>

    </Container>
  );
};

export default SearchResult;