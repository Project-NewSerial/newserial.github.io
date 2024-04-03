import React, { ReactNode } from "react";
import { LoadingImageStyle } from "./styles";

/**
 * LoadingImage 컴포넌트
 * @author 김민지
 */

interface Props {
  width?: number;
  marginTop?: string;
  white?: boolean;
}

const LoadingImage = ({ width, marginTop, white }: Props) => {
  return (
    <LoadingImageStyle
      src={ white ? "/assets/icons/icon_loading _white.svg" : "/assets/icons/icon_loading.svg"}
      width={width ? width : 20}
      style={{marginTop : marginTop? marginTop : "auto"}}
    />
  );
};

export default LoadingImage;
