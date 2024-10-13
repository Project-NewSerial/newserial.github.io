import { useDispatch, useSelector } from "react-redux";
import api from "./api";
import { setToken } from "../state/redux/modules/auth";

export interface LoginParams {
  email: string;
  password: string;
}

export interface SendMailParams {
  email: string;
}

export interface CheckNumberParams {
  email: string;
  code: string;
}

export interface SignupParams {
  email: string;
  password: string;
}

//로그인

export const login = async (params: LoginParams) =>
  await api.post(`/login`, params, {
    withCredentials: true,
  });

export const naverLogin = async () => {
  const url = `${process.env.REACT_APP_API}/oauth2/authorization/naver`;
  return (window.location.href = new URL(url, window.location.origin).href);
};

//회원가입

export const sendMail = async (params: SendMailParams) =>
  await api.post(`/email`, {
    params,
  });

export const checkNumber = async (params: CheckNumberParams) =>
  await api.post(`/email-number`, {
    params,
  });

export const signup = async (params: SignupParams) =>
  await api.post(`/members`, {
    params,
  });

//소셜 로그인 콜백

export const getCookie = async (token: string | null) =>
  await api.get(`/cookie`, {
    headers: {
      Authorization: `${token}`,
    },
    withCredentials: true,
  });

//임시 비밀번호

export const setTempPassword = async (email: string) =>
  await api.post(`/temp-password`, { email: email });

// accessToken 유효한지 확인

export const logoutCheck = async (accessToken: string | null) => {
  return await api.get("/logoutCheck", {
    headers: {
      Authorization: `${accessToken}`,
    },
  });
};

// refresh Token이 유효 여부 check

export const reissue = async (message?: string) => {
  const dispatch = useDispatch();

  const { data } = await api.get(`/reissue`, {
    withCredentials: true,
  });

  if (data) { // refresh token 유효
    dispatch(setToken(data.accessToken));
    return true;
  } else { // refresh token 유효하지 않음
    if (message) alert(message);
    return false;
  }
};
