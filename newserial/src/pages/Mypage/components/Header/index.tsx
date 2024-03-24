import React, { useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import { Container, Left, Right } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../../../redux/modules/auth";
import api from "../../../../api";

/**
 * Mypage의 Header 컴포넌트
 * @author 신정은
 */
interface RootState {
  auth: {
    accessToken: null | string;
  };
}

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);

  //logout api 호출
  const logout = async () => {
    try {
      const { data } = await api.post(
        `/logout`,
        {},
        {
          headers: {
            Authorization: `${accessToken}`,
          },
          withCredentials: true,
        }
      );
      if (data === "logout success\r\n") {
        dispatch(setToken(""));
        alert("로그아웃 되었습니다.");
        navigate("/");
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  const { mutate: logoutMutate } = useMutation({
    mutationFn: logout,
  });

  return (
    <Container>
      <Left onClick={() => navigate("/")}>NEWSERIAL</Left>
      <Right onClick={() => logoutMutate()}>로그아웃</Right>
    </Container>
  );
};

export default Header;
