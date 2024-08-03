import { useEffect, useRef, useState } from "react";
import {
  Container,
  RelatedWordsArea,
  RelatedWordRow,
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
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import api from "../../api/api";

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

interface RelatedWord {
  suggestions: Array<string>;
}

/**
 * 홈 페이지
 * @author 김민지
 */
const SearchResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  const [searchWord, setSearchWord] = useState<string>("");
  const [relatedWordList, setRelatedWordList] = useState<RelatedWord>();
  const [searchResult, setSearchResult] = useState<Result>();
  const [isRelatedModal, setIsRelatedModal] = useState(false);

  const relatedModalRef = useRef(null);

  /**
   * 연관검색어 get 함수
   * @
   */
  const postSearchRelatedWords = async (text: string) => {
    if (accessToken !== undefined && text !== undefined) {
      try {
        const { data } = await api.post(
          `/newserial/search`,
          { query: text },
          {
            headers: {
              Authorization: accessToken,
            },
          }
        );
        if (data !== undefined) {
          if (data?.suggestions.length > 0) {
            setRelatedWordList(data);
          }
        }
      } catch (error) {
        console.log("에러가 발생했습니다.", error);
      }
    }
  };

  /**
   * 검색 결과 get 함수
   * @
   */
  const getSearchResultNews = async () => {
    if (accessToken !== undefined && searchWord.length > 0) {
      try {
        const endcodedString = encodeURIComponent(searchWord);
        const { data } = await api.get(
          `/newserial/search?keyword=${endcodedString}`,
          {
            headers: {
              Authorization: accessToken,
            },
          }
        );
        if (data !== undefined) {
          console.log("result", data);
          setSearchResult(data);
          setIsRelatedModal(false);
        }
      } catch (error) {
        console.log("에러가 발생했습니다.", error);
      }
    }
  };

  const handleClickRelatedModal = (e: { target: any }) => {
    if (
      (isRelatedModal && !relatedModalRef.current) ||
      relatedModalRef?.current
    ) {
      setIsRelatedModal(false);
    }
  };

  useEffect(() => {
    if (searchWord.length > 0) {
      postSearchRelatedWords(searchWord);
    } else if (searchWord.length === 0) {
      setIsRelatedModal(false);
    }
  }, [searchWord]);

  useEffect(() => {
    window.addEventListener("click", handleClickRelatedModal);
    return () => {
      window.removeEventListener("click", handleClickRelatedModal);
    };
  }, []);

  return (
    <Container>
      <Header
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        getSearchResultNews={getSearchResultNews}
        relatedWordList={relatedWordList}
        isRelatedModal={isRelatedModal}
        setIsRelatedModal={setIsRelatedModal}
      />
      {searchResult && searchResult?.content.length > 0 ? (
        <ResultArea ref={relatedModalRef}>
          <ResultTitle>
            <ResultWord>'&nbsp;&nbsp;{searchWord}&nbsp;'</ResultWord>검색
            결과입니다.
          </ResultTitle>
          <ResultRowArea>
            {searchResult?.content.map((el, index) => (
              <ResultRow
                key={el?.id}
                onClick={() =>
                  navigate("/newsdetail", { state: { newsId: el.id } })
                }
              >
                <NewsImage src="/assets/dummyImages/dummyImage.jpg" />
                <NewsInformation>
                  <NewsPress>[조선비즈]</NewsPress>
                  <NewsTitle>{el?.title}</NewsTitle>
                </NewsInformation>
              </ResultRow>
            ))}
          </ResultRowArea>
        </ResultArea>
      ) : (
        <div></div>
      )}
    </Container>
  );
};

export default SearchResult;
