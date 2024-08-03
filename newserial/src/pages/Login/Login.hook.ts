import {
  useMutationLogin,
  useMutationNaverLogin,
} from "../../state/react-query/auth";
import { useState } from "react";

const useLogin = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });

  const { mutate: mutateLogin } = useMutationLogin(inputs);
  const { mutate: mutateNaverLogin } = useMutationNaverLogin();

  /**
   * inputs 변경 함수
   * @param {React.ChangeEvent<HTMLInputElement>} e 이벤트
   */
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleLoginButtonClick = () => mutateLogin();

  const handleNaverLoginButtonClick = () => mutateNaverLogin();

  return {
    handleLoginButtonClick,
    handleNaverLoginButtonClick,
    changeInput,
    inputs,
  };
};

export default useLogin;
