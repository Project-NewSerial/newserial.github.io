import { useEffect } from "react";
import {
  ToggleButton,
  CheckBox,
  ButtonLabel,
} from "./styles";
import axios from "axios";

interface ToggleSlideProps {
  isToggleOn: boolean;
  setIsToggleOn: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleSlide = (props: ToggleSlideProps) => {

  return (
    <ToggleButton onClick={() => props.setIsToggleOn(!props.isToggleOn)} isToggleOn={props?.isToggleOn}>
      <CheckBox type="checkbox" />
      <ButtonLabel isToggleOn={props?.isToggleOn} />
    </ToggleButton>

  );
};

export default ToggleSlide;
