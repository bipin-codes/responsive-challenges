import React from "react";
import ReactDOM from "react-dom";

import {
  CloseButton,
  MobileMenu,
  MobileMenuItem,
  StyledContainer,
} from "./styles";

const MobileMenuPortal: React.FC<{
  theme?: "light" | "dark";
  items: string[];
  onClose: () => void;
}> = ({ items, onClose, theme = "dark" }) =>
  ReactDOM.createPortal(
    <StyledContainer theme={theme}>
      <CloseButton theme={theme} onClick={onClose}>
        X
      </CloseButton>
      <MobileMenu>
        {items.map((item, idx) => (
          <MobileMenuItem key={idx}>{item}</MobileMenuItem>
        ))}
      </MobileMenu>
    </StyledContainer>,
    document.body
  );

export default MobileMenuPortal;
