import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  useQueryLogoutCheck,
  useQueryReissue,
} from "../state/react-query/auth";

interface RootState {
  auth: {
    accessToken: null | string;
  };
}

/**
 * 비로그인 상태에서만 특정 페이지에 접근 가능
 * @author 신정은
 */
const PublicRoute = () => {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);

  /**
   * accessToken이 유효한지 확인
   */
  const { data: isValid } = useQueryLogoutCheck(accessToken);

  /**
   * refresh Token이 유효하면 accessToken 발급
   */
  const { data: isLogin, isLoading } = useQueryReissue(!isValid);

  if (isValid) return <Navigate to="/" />;
  if (isLoading) return null;

  return isLogin ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
