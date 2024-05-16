import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import useCommon from "../hooks/queries/useCommon";
import useReissue from '../hooks/queries/useReissue';

/**
 * 한입퀴즈는 로그인 했을 경우에만, 뉴시리얼은 비로그인 시에도 사용 가능
 * @author 김민지
 */
const HomeRoute = () => {

  /**
   * accessToken이 유효한지 확인하는 api
   * @return {boolean} 유효하면 true 아니면 false
   */
  const { data: isValid, isLoading: accessTokenLoading } =
  useCommon(`/logoutCheck`);

     /**
   * refresh Token이 유효하면 accessToken 발급하는 api 호출
   * @return {boolean} 유효하면 true 아니면 false
   */
  const {isLoading: refreshLoginLoading } = useReissue(!isValid);

  if (accessTokenLoading) return null;
  if (isValid) return <Outlet />;
  if (refreshLoginLoading) return null;
  else return <Outlet />;
};

export default HomeRoute;
