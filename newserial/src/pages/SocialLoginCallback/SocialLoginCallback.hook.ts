import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setToken } from "../../state/redux/modules/auth";
import { useQueryGetCookie } from "../../state/react-query/auth";

const useSocialLoginCallback = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get("token");

  const { isLoading, data, isError } = useQueryGetCookie(token);

  useEffect(() => {
    if (token) dispatch(setToken(JSON.stringify(token).split('"')[1]));
    else navigate("*");
  }, []);

  useEffect(() => {
    if (isError) {
      alert("로그인 실패!\n 로그인 페이지로 이동합니다.");
    }
  }, [isError]);

  return {
    isLoading,
    data,
  };
};

export default useSocialLoginCallback;
