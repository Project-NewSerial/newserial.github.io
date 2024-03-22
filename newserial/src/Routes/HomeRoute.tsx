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
     */
    const refreshLogin = async () => {
        try {
            const { data } = await api.get(`/reissue`, {
                withCredentials: true,
            });
            if (data) {
                dispatch(setToken(data.accessToken));
                return data?.accessToken;
            }
            else{
                dispatch(setToken('out'));
                return 'out';
            }
        } catch (error) {
            console.error("토큰 재발급 중 에러가 발생했습니다:", error)
        }
    };

    const { isLoading } = useQuery({
        queryKey: ["refresh-login"],
        queryFn: refreshLogin,
        enabled: accessToken === null,
    });

    console.log('------access', accessToken)
    if (accessToken===""||accessToken===null){
        return <Navigate to ={"/"}/>
    }
    // if (isLoading) return null;
  
    return accessToken ? <Outlet /> : <Navigate to={"/"} />;
  };
  
export default HomeRoute;
