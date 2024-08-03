import { useMutation } from "@tanstack/react-query";
import { useMutationLogin } from "../../state/redux/react-query/auth";
import { deflate } from "zlib";

const useLogin = () => {
  const { mutateAsync: mutateLogin } = useMutationLogin();

  const handleLoginButtonClick = async () => {
    try {
      await mutateLogin;
    } catch (e) {
      alert("로그인에 실패했습니다.");
    }
  };

  return { handleLoginButtonClick };
};

export default useLogin;
