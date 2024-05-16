import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import useCommon from "../hooks/queries/useCommon";
import useReissue from "../hooks/queries/useReissue";

/**
 * 로그인이 되어 있을 때에만 특정 페이지에 접근 가능
 * @author 신정은
 */
const PrivateRoute = () => {

  /**
   * accessToken이 유효한지 확인하는 api
   * @return {boolean} 유효하면 true 아니면 false
   */
  const { data: isValid } = useCommon(`/logoutCheck`);

  /**
   * refresh Token이 유효하면 accessToken 발급하는 api 호출
   * @return {boolean} 유효하면 true 아니면 false
   */
  const { data: isLogin, isLoading } = useReissue(
    !isValid,
    "로그인이 필요합니다."
  );

  if (isValid) return <Outlet />;
  if (isLoading) return null;

  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
