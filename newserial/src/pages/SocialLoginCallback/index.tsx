import React, { useEffect } from "react";
import { Container, Loading } from "./styles";
import api from "../../api";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/modules/auth";
import { useQuery } from "@tanstack/react-query";

/**
 * 소셜로그인 콜백 페이지
 * @author 신정은
 */
const SocialLoginCallback = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    if (token) dispatch(setToken(JSON.stringify(token).split('"')[1]));
    else navigate("/not-found");
  }, []);
  /**
   * 쿠키 가져오는 함수
   * @return {boolean} 성공시 true, 실패시 false
   */
  const getCookie = async () => {
    try {
      await api.get(`/cookie`, {
        headers: {
          Authorization: `${token}`,
        },
        withCredentials: true,
      });
      return true;
    } catch (error: any) {
      alert("로그인 실패!\n 로그인 페이지로 이동합니다.");
      return false;
    }
  };

  const { isLoading, data } = useQuery({
    queryKey: ["cookie"],
    queryFn: getCookie,
    enabled: token !== null,
  });

  if (isLoading)
    return (
      <Container>
        <Loading>LOADING...</Loading>
      </Container>
    );
  return data ? <Navigate to="/" /> : <Navigate to={"/login"} />;
};

export default SocialLoginCallback;
