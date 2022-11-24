import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, StyledContainer, Title } from "./styles";

const Navbar: React.FC<{
  title?: string;
  menuItems?: string[];
  showCaps?: boolean;
}> = ({ title, menuItems }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const onMenuClick = () => {
    setMobileMenu(true);
    console.log(mobileMenu);
  };
  return (
    <StyledContainer>
      <Title>
        <span>{title ?? "New Title"}</span>
      </Title>
      <MenuButton type="button" onClick={onMenuClick}>
        <span className="material-symbols-outlined">menu</span>
      </MenuButton>
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
            ? menuItems.map((item, idx) => (
                <MenuItem key={idx}>{item}</MenuItem>
              ))
            : null}{" "}
        </ul>
      </Menu>
    </StyledContainer>
  );
};
export default Navbar;
