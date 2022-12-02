import React, { useState } from 'react';

import MobileMenuPortal from './MobileMenu/MobileMenu';
import { Menu, MenuButton, MenuItem, StyledContainer, Title } from './styles';
import { CSSProperties } from 'react';

const Navbar: React.FC<{
  title?: string;
  menuItems?: string[];
  showCaps?: boolean;
  titleStyle?: CSSProperties;
  menuItemStyle?: CSSProperties;
}> = ({ title, menuItems, titleStyle, menuItemStyle }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <StyledContainer>
      <Title style={titleStyle ?? {}}>
        <span>{title ?? 'New Title'}</span>
      </Title>
      <MenuButton type="button" onClick={toggleMenu}>
        <span className="material-symbols-outlined">menu</span>
      </MenuButton>
      <Menu>
        <ul
          style={{
            display: 'flex',
            listStyle: 'none',
            justifyContent: 'space-evenly',
            color: 'white',
          }}
        >
          {menuItems
            ? menuItems.map((item, idx) => (
                <MenuItem style={menuItemStyle} key={idx}>
                  {item}
                </MenuItem>
              ))
            : null}
        </ul>
      </Menu>
      {mobileMenu ? (
        <MobileMenuPortal onClose={toggleMenu} items={menuItems ?? ['']} />
      ) : null}
    </StyledContainer>
  );
};
export default Navbar;
