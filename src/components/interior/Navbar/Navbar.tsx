import React, { useState } from "react";

import MobileMenuPortal from "./MobileMenu/MobileMenu";
import { Menu, MenuButton, MenuItem, StyledContainer, Title } from "./styles";
import { CSSProperties } from "react";

const Navbar: React.FC<{
  title?: string;
  menuItems?: string[];
  showCaps?: boolean;
  titleStyle?: CSSProperties;
  menuItemStyle?: CSSProperties;
  theme?: "light" | "dark";
  breakAt?: string;
}> = ({
  title,
  menuItems,
  titleStyle,
  menuItemStyle,
  theme = "dark",
  breakAt = "801px",
}) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <StyledContainer>
      <Title style={titleStyle ?? {}}>
        <span>{title ?? "New Title"}</span>
      </Title>
      <MenuButton
        break={breakAt}
        type="button"
        onClick={toggleMenu}
        theme={theme}
      >
        <span className="material-symbols-outlined">menu</span>
      </MenuButton>
      <Menu break={breakAt}>
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
                <MenuItem style={menuItemStyle || {}} key={idx} theme={theme}>
                  {item}
                </MenuItem>
              ))
            : null}
        </ul>
      </Menu>
      {mobileMenu ? (
        <MobileMenuPortal
          theme={theme}
          onClose={toggleMenu}
          items={menuItems ?? [""]}
        />
      ) : null}
    </StyledContainer>
  );
};
export default Navbar;
