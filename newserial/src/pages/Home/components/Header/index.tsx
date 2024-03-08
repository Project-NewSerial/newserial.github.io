import { useEffect } from "react";
import {
  HeaderArea,
  Logo,
  SearchIcon,
  MyPageIcon,
} from "./styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderArea>
      <Logo>NEWSERIAL</Logo>
      <SearchIcon onClick={()=>navigate("/search-result")} src={"/assets/icons/icon_search.svg"}/>
      <MyPageIcon onClick={()=>navigate("/mypage")} src={"/assets/icons/icon_mypage.svg"}/>
    </HeaderArea>
  );
};

export default Header;