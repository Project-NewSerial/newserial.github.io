import { useEffect } from "react";
import {
  HeaderArea,
  Logo,
} from "./styles";
import axios from "axios";

const Header = () => {
  return (
    <HeaderArea>
      <Logo>NEWSERIAL</Logo>
    </HeaderArea>
  );
};

export default Header;