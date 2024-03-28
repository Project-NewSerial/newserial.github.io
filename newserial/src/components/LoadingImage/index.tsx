import React, { ReactNode } from "react";
import { LoadingImageStyle } from "./styles";

/**
 * LoadingImage 컴포넌트
 * @author 김민지
 */

interface Props {
  width?: number;
}

const LoadingImage = ({ width }: Props) => {
  return (
    <LoadingImageStyle
      src="/assets/icons/icon_loading.svg"
      width={width ? width : 20}
    />
  );
};

export default LoadingImage;
