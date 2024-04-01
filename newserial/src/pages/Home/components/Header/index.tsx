import { useEffect } from "react";
import {
  HeaderArea,
  Logo,
  SearchIcon,
  MyPageIcon,
  LoginSignup,
  LoginButton,
  SignupButton,
} from "./styles";
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
      <Logo onClick={()=>navigate('/')}>NEWSERIAL</Logo>
      {accessToken !== null ? (
        <>
          <SearchIcon
            onClick={() => navigate("/search-result")}
            src={"/assets/icons/icon_search.svg"}
          />
          <MyPageIcon
            onClick={() => navigate("/mypage")}
            src={"/assets/icons/icon_mypage.svg"}
          />
        </>
      ) : (
        <LoginSignup>
          <LoginButton onClick={() => navigate("/login")}>로그인</LoginButton>
          <SignupButton onClick={() => navigate("/signup")}>
            회원가입
          </SignupButton>
        </LoginSignup>
      )}
    </HeaderArea>
  );
};

export default Header;
