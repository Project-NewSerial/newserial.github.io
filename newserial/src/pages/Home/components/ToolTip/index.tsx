import { useEffect } from "react";
import {
  ToolTipContainer,
} from "./styles";
import axios from "axios";

const ToolTip = (props:{message:string}) => {
  return (
    <ToolTipContainer>
      <img src="/assets/icons/icon_tooltip.svg"/>
      <div className="tooltip">{props?.message}</div>
    </ToolTipContainer>
  );
};

export default ToolTip;