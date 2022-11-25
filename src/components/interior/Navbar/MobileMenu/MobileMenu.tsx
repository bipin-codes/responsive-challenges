import React from "react";
import ReactDOM from "react-dom";

import {
  CloseButton,
  MobileMenu,
  MobileMenuItem,
  StyledContainer,
} from "./styles";

const MobileMenuPortal: React.FC<{ items: string[]; onClose: () => void }> = ({
  items,
  onClose,
}) =>
  ReactDOM.createPortal(
    <StyledContainer>
      <CloseButton onClick={onClose}>X</CloseButton>
      <MobileMenu>
        {items.map((item, idx) => (
          <MobileMenuItem key={idx}>{item}</MobileMenuItem>
        ))}
      </MobileMenu>
    </StyledContainer>,
    document.body
  );

export default MobileMenuPortal;
