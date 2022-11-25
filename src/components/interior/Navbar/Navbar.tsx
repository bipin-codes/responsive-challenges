import React, { useState } from "react";
import MobileMenuPortal from "./MobileMenu/MobileMenu";
import { Menu, MenuButton, MenuItem, StyledContainer, Title } from "./styles";

const Navbar: React.FC<{
  title?: string;
  menuItems?: string[];
  showCaps?: boolean;
}> = ({ title, menuItems }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <StyledContainer>
      <Title>
        <span>{title ?? "New Title"}</span>
      </Title>
      <MenuButton type="button" onClick={toggleMenu}>
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
            : null}
        </ul>
      </Menu>
      {mobileMenu ? (
        <MobileMenuPortal onClose={toggleMenu} items={menuItems ?? [""]} />
      ) : null}
    </StyledContainer>
  );
};
export default Navbar;
