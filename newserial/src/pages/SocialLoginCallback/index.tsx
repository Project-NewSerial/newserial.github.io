import React, { useEffect } from "react";
import { Container, Loading } from "./styles";
import api from "../../api";
import { Navigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/modules/auth";
import { useMutation, useQuery } from "@tanstack/react-query";

/**
 * 소셜로그인 콜백 페이지
 * @author 신정은
 */
const SocialLoginCallback = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get("token");
  dispatch(setToken(JSON.stringify(token)));

  //쿠키 가져오는 함수
  const getCookie = async () => {
    try {
      await api.get(`/cookie`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
      return true;
    } catch (error: any) {
      console.log(error);
    }
  };

  const { isLoading, data } = useQuery({
    queryKey: ["cookie"],
    queryFn: getCookie,
  });

  return (
    <Container>
      {!isLoading && data ? <Loading>LOADING...</Loading> : <Navigate to="/" />}
    </Container>
  );
};

export default SocialLoginCallback;
