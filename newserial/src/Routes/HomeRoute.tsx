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
 * 한입퀴즈는 로그인 했을 경우에만, 뉴시리얼은 비로그인 시에도 사용 가능
 * @author 김민지
 */
const HomeRoute = () => {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);

  /**
   * accessToken이 유효한지 확인
   */
  const { data: isValid, isLoading: accessTokenLoading } =
    useQueryLogoutCheck(accessToken);

  /**
   * refresh Token이 유효하면 accessToken 발급
   */
  const { isLoading: refreshLoginLoading } = useQueryReissue(!isValid);

  if (accessTokenLoading) return null;
  if (isValid) return <Outlet />;
  if (refreshLoginLoading) return null;
  else return <Outlet />;
};

export default HomeRoute;
