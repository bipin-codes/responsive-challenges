import { Container } from "components/common-styled/common";
import styled from "styled-components";
import { MenuItem } from "../styles";
export const StyledContainer = styled(Container)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #181719;
  z-index: 1000;
  top: 0;
  left: 0;
  color: #fff;
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
  color: white;
  border: 0;
  font-size: 3rem;
`;
