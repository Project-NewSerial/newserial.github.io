import api from "./api";

export interface LoginParams {
  email: string;
  password: string;
}

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
