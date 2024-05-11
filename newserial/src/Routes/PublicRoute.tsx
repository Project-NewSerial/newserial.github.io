import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import useCommon from "../hooks/queries/useCommon";
import useReissue from "../hooks/queries/useReissue";

/**
 * 비로그인 상태에서만 특정 페이지에 접근 가능
 * @author 신정은
 */
const PublicRoute = () => {

  /**
   * accessToken이 유효한지 확인하는 api
   * @return {boolean} 유효하면 true 아니면 false
   */
  const { data: isValid } = useCommon(`/logoutCheck`);

  /**
   * refresh Token이 유효하면 accessToken 발급하는 api 호출
   * @return {boolean} 유효하면 true 아니면 false
   */
  const { data: isLogin, isLoading } = useReissue(!isValid);

  if (isValid) return <Navigate to="/" />;
  if (isLoading) return null;

  return isLogin ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
