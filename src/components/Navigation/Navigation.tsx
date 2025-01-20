import { useState } from "react";
import Menu from "../Menu/Menu";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { MenuItemProps } from "../Menu/MenuItem";
import styled from "styled-components";

export const Navigation = ({menuItems}:{menuItems:MenuItemProps[]}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer className="navbar">
     <BurgerMenu onClick={toggleMenu} />
      <Menu isOpen={isOpen} items={menuItems} />
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: var(--space-sm);

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`;
