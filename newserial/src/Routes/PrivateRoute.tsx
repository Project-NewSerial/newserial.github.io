import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import {
  useQueryLogoutCheck,
  useQueryReissue,
} from "../state/react-query/auth";
import { useSelector } from "react-redux";

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
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);

  /**
   * accessToken이 유효한지 확인
   */
  const { data: isValid } = useQueryLogoutCheck(accessToken);

  /**
   * refresh Token이 유효하면 accessToken 발급
   */
  const { data: isLogin, isLoading } = useQueryReissue(
    !isValid,
    "로그인이 필요합니다."
  );

  if (isValid) return <Outlet />;
  if (isLoading) return null;

  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
