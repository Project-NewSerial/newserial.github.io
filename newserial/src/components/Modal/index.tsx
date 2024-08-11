import React, { ReactNode } from "react";
import { Container, Overlay, Box } from "./styles";

/**
 * Modal 컴포넌트
 * @author 신정은
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setToggle 모달 표시 여부 설정 함수
 * @param {ReactNode} content 모달 내용
 */

interface Modal {
  onModalClose: () => void;
  content: ReactNode;
  colorSelected?: string;
}

const Modal = ({ onModalClose, content, colorSelected }: Modal) => {
  return (
    <Container>
      <Overlay onClick={onModalClose}>
        <Box
          onClick={(e) => e.stopPropagation()}
          style={{ backgroundColor: colorSelected ? colorSelected : "white" }}
        >
          <img src="/assets/icons/icon_cancel.svg" onClick={onModalClose} />
          {content}
        </Box>
      </Overlay>
    </Container>
  );
};

export default Modal;
