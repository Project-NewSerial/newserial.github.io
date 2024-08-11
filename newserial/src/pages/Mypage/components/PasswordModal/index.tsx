import React, { useState } from "react";
import Modal from "../../../../components/Modal";
import {
  Main,
  Title,
  InputBox,
  InputText,
  Input,
  WarningText,
  InputContent,
  Button,
} from "./styles";
import { useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import api from "../../../../api/api";

interface propsType {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

interface RootState {
  auth: {
    accessToken: null | string;
  };
}

/**
 * 비밀번호 재설정 모달
 * @author 신정은
 */
const PasswordModal = ({ setToggle }: propsType) => {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  const [inputs, setInputs] = useState({
    password: "",
    checkPassword: "",
  });
  const [isValid, setIsValid] = useState({
    passwordFormat: false,
    passwordCheck: false,
  });
  const [warningMessage, setWarningMessage] = useState({
    email: "",
    password: "비밀번호 형식이 올바르지 않습니다.",
    checkPassword: "비밀번호가 일치하지 않습니다.",
    code: "",
  });

  const submitRequirements = isValid.passwordFormat && isValid.passwordCheck;

  const { password, checkPassword } = inputs;

  /**
   * inputs 변경 함수
   * @param {React.ChangeEvent<HTMLInputElement>} e 이벤트
   */
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    inputCheck(name, value);
  };

  /**
   * 입력이 올바른지 확인하는 함수
   * @author 신정은
   * @param {string} type input name
   * @param {string} value input value
   *
   * @return {boolean} 올바르면 true 아니면 false
   */
  const inputCheck = (type: string, value: string) => {
    if (type === "password") {
      const regExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
      if (!regExp.test(value)) {
        setIsValid({
          ...isValid,
          passwordFormat: false,
        });
      } else {
        if (checkPassword !== value)
          setIsValid({
            ...isValid,
            passwordFormat: true,
            passwordCheck: false,
          });
        else setIsValid({ ...isValid, passwordCheck: true });
      }
    } else if (type === "checkPassword") {
      if (password !== value) setIsValid({ ...isValid, passwordCheck: false });
      else setIsValid({ ...isValid, passwordCheck: true });
    }
  };

  /**
   * 비밀번호 재설정 api 호출
   * @param newPassword 새 비밀번호
   * @param passwordCheck 비밀번호 확인
   */
  const resetPassword = async () => {
    try {
      const { data } = await api.post(
        `/password`,
        { newPassword: password, passwordCheck: checkPassword },
        {
          headers: {
            Authorization: `${accessToken}`,
          },
        }
      );

      if (data) {
        setToggle(false);
        alert(data);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  const { mutate: resetPasswordMutate } = useMutation({
    mutationFn: resetPassword,
  });

  const handleModalClose = () => {
    setToggle(false);
  };

  return (
    <Modal
      onModalClose={handleModalClose}
      content={
        <>
          <Title>비밀번호 재설정</Title>
          <Main>
            <InputContent>
              <InputBox>
                <InputText>새 비밀번호</InputText>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="영문, 숫자, 특수기호가 포함 8~20자"
                  onChange={(e) => changeInput(e)}
                />
                {password !== "" && !isValid.passwordFormat && (
                  <WarningText>{warningMessage.password}</WarningText>
                )}
              </InputBox>
              <InputBox>
                <InputText>비밀번호 확인</InputText>
                <Input
                  type="password"
                  name="checkPassword"
                  value={checkPassword}
                  onChange={(e) => changeInput(e)}
                />
                {checkPassword !== "" && !isValid.passwordCheck && (
                  <WarningText>{warningMessage.checkPassword}</WarningText>
                )}
              </InputBox>
            </InputContent>
            <Button
              disabled={!submitRequirements}
              onClick={() => resetPasswordMutate()}
            >
              확인
            </Button>
          </Main>
        </>
      }
    />
  );
};

export default PasswordModal;
