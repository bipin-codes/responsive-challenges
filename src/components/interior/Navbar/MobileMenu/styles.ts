import { Container } from "components/common-styled/common";
import styled from "styled-components";
import { MenuItem } from "../styles";
export const StyledContainer = styled(Container)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => (props.theme === "dark" ? "#000" : "#fff")};
  z-index: 1000;
  top: 0;
  left: 0;
  color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
`;

export const MobileMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const MobileMenuItem = styled(MenuItem)`
  margin: 2rem 0;
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  background: transparent;
  color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
  border: 0;
  font-size: 3rem;
`;
