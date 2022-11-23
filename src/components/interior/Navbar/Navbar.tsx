import React from "react";
import { Menu, MenuItem, StyledContainer, Title } from "./styles";

const Navbar: React.FC<{
  title?: string;
  menuItems?: string[];
  showCaps?: boolean;
}> = ({ title, menuItems }) => (
  <StyledContainer>
    <Title>
      <span>{title ?? "New Title"}</span>
    </Title>
    <Menu>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          justifyContent: "space-evenly",
          color: "white",
        }}
      >
        {menuItems
          ? menuItems.map((item, idx) => <MenuItem key={idx}>{item}</MenuItem>)
          : null}{" "}
      </ul>
    </Menu>
  </StyledContainer>
);
export default Navbar;
