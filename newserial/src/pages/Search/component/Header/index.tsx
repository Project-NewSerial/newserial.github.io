import { useEffect } from "react";
import {
  HeaderArea,
  Logo,
  SearchArea,
  SearchIcon,

} from "./styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Header = (props:{searchWord:string, setSearchWord:React.Dispatch<React.SetStateAction<string>> ,
  getSearchResultNews:() => Promise<void>
}) => {
  const navigate = useNavigate();

  return (
    <HeaderArea>
      <Logo onClick={()=>navigate('/')}>NEWSERIAL</Logo>
      <SearchArea onChange={(e)=>props?.setSearchWord(e.target.value)}
      placeholder="검색어를 입력해주세요"/>
      <SearchIcon 
      onClick={()=>props?.getSearchResultNews()}
      src="/assets/icons/icon_search.svg"/>
    </HeaderArea>
  );
};

export default Header;