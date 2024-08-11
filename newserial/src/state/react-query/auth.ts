import { useMutation } from "@tanstack/react-query";
import {
  checkNumber,
  CheckNumberParams,
  login,
  LoginParams,
  naverLogin,
  sendMail,
  SendMailParams,
  signup,
  SignupParams,
} from "../../api/auth";
import { useNavigate } from "react-router-dom";

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

export const useMutationSeneMail = (params: SendMailParams) =>
  useMutation({
    mutationFn: () => sendMail(params),
  });

export const useMutationCheckNumber = (params: CheckNumberParams) =>
  useMutation({
    mutationFn: () => checkNumber(params),
  });

export const useMutationSignup = (params: SignupParams) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => signup(params),
    onSuccess: (res) => {
      alert(res.data.message);
      navigate("/login");
    },
  });
};
