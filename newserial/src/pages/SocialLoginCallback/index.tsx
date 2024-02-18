import React, { useEffect } from "react";
import { Container, Loading } from "./styles";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../modules/auth";
import { useMutation } from "@tanstack/react-query";

/**
 * 소셜로그인 콜백 페이지
 * @author 신정은
 */
const SocialLoginCallback = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get("token");
  dispatch(setToken(JSON.stringify(token)));

  useEffect(() => {
    getCookieMutate();
  }, []);

  //쿠키 가져오는 함수
  const getCookie = async () => {
    try {
      await axios.get(`${process.env.REACT_APP_API}/cookie`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      //navigate("/");
    } catch (error: any) {
      console.log(error);
    }
  };

  const { mutate: getCookieMutate } = useMutation({
    mutationFn: getCookie,
  });

  return (
    <Container>
      <Loading>LOADING...</Loading>
    </Container>
  );
};

export default SocialLoginCallback;
