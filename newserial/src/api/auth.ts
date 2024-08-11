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
  code: string;
}

//로그인

export const login = async (params: LoginParams) =>
  await api.post(
    `/login`,
    {
      params,
    },
    {
      withCredentials: true,
    }
  );

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
