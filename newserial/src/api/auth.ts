import api from "./api";

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
