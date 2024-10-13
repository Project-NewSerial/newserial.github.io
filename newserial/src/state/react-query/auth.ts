import { useMutation, useQuery } from "@tanstack/react-query";
import {
  checkNumber,
  CheckNumberParams,
  getCookie,
  login,
  LoginParams,
  logoutCheck,
  naverLogin,
  reissue,
  sendMail,
  SendMailParams,
  setTempPassword,
  signup,
  SignupParams,
} from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { setToken } from "../redux/modules/auth";
import { useDispatch } from "react-redux";

export const useMutationLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: login,
    onError: () => alert("로그인에 실패했습니다."),
    onSuccess: (res) => {
      dispatch(setToken(res.data.accessToken));
      navigate("/");
    },
  });
};

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

export const useQueryGetCookie = (token: string | null) =>
  useQuery({
    queryKey: ["cookie"],
    queryFn: () => getCookie(token),
    enabled: token !== null,
  });

export const useMutationSetTempPassword = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: setTempPassword,
    onSuccess: (res) => {
      alert(res.data);
      navigate("/login");
    },
    onError: () => {
      alert("회원정보가 존재하지 않습니다.");
    },
  });
};

export const useQueryLogoutCheck = (accessToken: string | null) =>
  useQuery({
    queryKey: ["logoutCheck"],
    queryFn: () => logoutCheck(accessToken),
  });

export const useQueryReissue = (enabled: boolean, message?: string) =>
  useQuery({
    queryKey: ["reissue"],
    queryFn: () => reissue(message),
    enabled: enabled,
  });
