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
   */
  const refreshLogin = async () => {
    const { data } = await api.get(`/reissue`, {
      withCredentials: true,
    });

    if (data) {
      dispatch(setToken(data.accessToken));
      return data.accessToken;
    } else {
      alert("로그인이 필요합니다.");
      return null;
    }
  };

  const { isLoading } = useQuery({
    queryKey: ["refresh-login"],
    queryFn: refreshLogin,
    enabled: accessToken === null,
  });

  if (accessToken === "") return null;
  else if (accessToken !== null && accessToken !== "") return <Outlet />;
  if (isLoading) return null;

  return accessToken ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoute;
