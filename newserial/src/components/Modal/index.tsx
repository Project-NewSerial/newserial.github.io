import React, { ReactNode } from "react";
import { Container, Overlay, Box } from "./styles";

/**
 * Modal 컴포넌트
 * @author 신정은
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setToggle 모달 표시 여부 설정 함수
 * @param {ReactNode} content 모달 내용
 */

interface Modal {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  content: ReactNode;
}

const Modal = ({ setToggle, content }: Modal) => {
  return (
    <Container>
      <Overlay onClick={() => setToggle(false)}>
        <Box onClick={(e) => e.stopPropagation()}>
          <img
            src="/assets/icons/icon_cancel.svg"
            onClick={() => setToggle(false)}
          />
          {content}
        </Box>
      </Overlay>
    </Container>
  );
};

export default Modal;
