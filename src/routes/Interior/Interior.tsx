import Navbar from "components/interior/Navbar";
import React from "react";
import { StyledContainer } from "./styles";

const TITLE = "The Interior";
const MENU_ITEMS = ["Home", "Collections", "About", "Contact"];

const Interior: React.FC = () => {
  return (
    <StyledContainer>
      <Navbar title={TITLE} menuItems={MENU_ITEMS} showCaps />;
    </StyledContainer>
  );
};

export default Interior;
