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
 * 로그인이 되어 있을 때에만 특정 페이지에 접근 가능
 * @author 신정은
 */
const PrivateRoute = () => {
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
      alert("로그인이 필요합니다.");
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

  const { data: isValid } = useQuery({
    queryKey: ["access-token"],
    queryFn: checkAccessToken,
  });

  const { data: isLogin, isLoading } = useQuery({
    queryKey: ["refresh-login"],
    queryFn: refreshLogin,
    enabled: !isValid,
  });

  if (isValid) return <Outlet />;
  if (isLoading) return null;

  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
