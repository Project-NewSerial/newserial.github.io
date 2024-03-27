import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import api from "../api";
import { setToken } from "../redux/modules/auth";
import { useQuery } from "@tanstack/react-query";

interface RootState {
  auth: {
    accessToken: null | string;
  };
}

/**
 * 한입퀴즈는 로그인 했을 경우에만, 뉴시리얼은 비로그인 시에도 사용 가능
 * @author 김민지
 */
const HomeRoute = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);

  /**
   * refresh Token이 유효하면 accessToken 발급하는 api 호출
   * @return {boolean} 유효하면 true 아니면 false
   */
  const refreshLogin = async () => {
    const { data } = await api.get(`/reissue`, {
      withCredentials: true,
    });

    if (data) {
      dispatch(setToken(data.accessToken));
      return true;
    } else {
      return false;
    }
  };

  /**
   * accessToken이 유효한지 확인하는 api
   * @return {boolean} 유효하면 true 아니면 false
   */
  const checkAccessToken = async () => {
    const { data } = await api.get(`/logoutCheck`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    return data;
  };

  const { data: isValid, isLoading: accessTokenLoading } = useQuery({
    queryKey: ["access-token"],
    queryFn: checkAccessToken,
  });

  const { isLoading: refreshLoginLoading } = useQuery({
    queryKey: ["refresh-login"],
    queryFn: refreshLogin,
    enabled: !isValid,
  });

  if (accessTokenLoading) return null;
  if (isValid) return <Outlet />;
  if (refreshLoginLoading) return null;
  else return <Outlet />;
};

export default HomeRoute;
