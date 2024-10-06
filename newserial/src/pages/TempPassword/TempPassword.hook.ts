import { useState } from "react";
import { useMutationSetTempPassword } from "../../state/react-query/auth";

const useTempPassword = () => {
  const [isValid, setIsValid] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  /**
   * 이메일 형식이 올바른지 확인하는 함수
   * @param {string} value 입력값
   */
  const emailCheck = (value: string) => {
    const regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (!regExp.test(value)) {
      setIsValid(false);
      setWarningMessage("이메일 형식이 올바르지 않습니다.");
    } else {
      setIsValid(true);
      setWarningMessage("");
    }
  };

  const { mutate: setTempPasswordMutate } = useMutationSetTempPassword();

  return {
    emailCheck,
    setTempPasswordMutate,
    isValid,
    warningMessage,
  };
};

export default useTempPassword;
