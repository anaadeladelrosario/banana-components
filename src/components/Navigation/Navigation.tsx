import Menu from "../Menu/Menu";
import { MenuItemProps } from "../Menu/MenuItem";
import styled from "styled-components";

export const Navigation = ({menuItems}:{menuItems:MenuItemProps[]}) => {
  return (
    <NavbarContainer className="navbar">
      <Menu items={menuItems} />
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
