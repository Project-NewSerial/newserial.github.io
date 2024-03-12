import { useEffect } from "react";
import {
  HeaderArea,
  Logo,
  SearchSection,
  SearchArea,
  RelatedWordsArea,
  RelatedWordRow,
  RelatedWordSearch,
  SearchIcon,

} from "./styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface RelatedWord {
  suggestions: Array<string>
}


const Header = (props: {
  searchWord: string, relatedWordList: RelatedWord | undefined, setSearchWord: React.Dispatch<React.SetStateAction<string>>,
  getSearchResultNews: () => Promise<void>,
  isRelatedModal: boolean,
  setIsRelatedModal: React.Dispatch<React.SetStateAction<boolean>>,
}) => {
  const navigate = useNavigate();


  return (
    <HeaderArea>
      <Logo onClick={() => navigate('/')}>NEWSERIAL</Logo>
      <SearchSection>
        <SearchArea
          onChange={(e) => {
            props.setIsRelatedModal(true);
            props?.setSearchWord(e.target.value);

          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              props?.getSearchResultNews()
            }
          }}
          placeholder="검색어를 입력해주세요" />

        {props?.isRelatedModal && props?.relatedWordList?.suggestions && props?.relatedWordList?.suggestions.length > 0 &&
          <RelatedWordsArea>
            {props?.relatedWordList?.suggestions.map((el, index) => (
              <RelatedWordRow key={index}>
                <RelatedWordSearch src="/assets/icons/icon_search.svg" />{el}
              </RelatedWordRow>
            ))}
          </RelatedWordsArea>
        }
      </SearchSection>

      <SearchIcon
        onClick={() => props?.getSearchResultNews()}
        src="/assets/icons/icon_search.svg" />
    </HeaderArea>
  );
};

export default Header;