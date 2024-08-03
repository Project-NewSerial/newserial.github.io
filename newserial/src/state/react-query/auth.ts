import { useMutation } from "@tanstack/react-query";
import { login, LoginParams, naverLogin } from "../../api/auth";

export const useMutationLogin = (params: LoginParams) =>
  useMutation({
    mutationFn: () => login(params),
    onError: () => alert("로그인에 실패했습니다."),
  });

export const useMutationNaverLogin = () =>
  useMutation({
    mutationFn: naverLogin,
    onError: () => alert("로그인에 실패했습니다."),
  });
