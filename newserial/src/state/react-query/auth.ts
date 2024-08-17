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

export const useMutationLogin = () =>
  useMutation({
    mutationFn: login,
    onError: () => alert("로그인에 실패했습니다."),
  });

export const useMutationNaverLogin = () =>
  useMutation({
    mutationFn: naverLogin,
    onError: () => alert("로그인에 실패했습니다."),
  });

export const useMutationSendMail = () =>
  useMutation({
    mutationFn: sendMail,
  });

export const useMutationCheckNumber = () =>
  useMutation({
    mutationFn: checkNumber,
  });

export const useMutationSignup = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: signup,
    onSuccess: (res) => {
      alert(res.data.message);
      navigate("/login");
    },
  });
};
