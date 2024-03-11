import { useEffect } from "react";
import {
  HeaderArea,
  Logo,
  SearchIcon,
  MyPageIcon,
  LoginButton,
  SignupButton,
} from "./styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface RootState {
  auth: {
    accessToken: null | string;
  };
}

const Header = () => {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);

  const navigate = useNavigate();

  return (
    <HeaderArea>
      <Logo>NEWSERIAL</Logo>
      {accessToken ?
        <>
          <SearchIcon onClick={() => navigate("/search-result")} src={"/assets/icons/icon_search.svg"} />
          <MyPageIcon onClick={() => navigate("/mypage")} src={"/assets/icons/icon_mypage.svg"} />
        </>
        : <>
          <LoginButton>로그인</LoginButton>
          <SignupButton>회원가입</SignupButton>
        </>}
    </HeaderArea>
  );
};

export default Header;