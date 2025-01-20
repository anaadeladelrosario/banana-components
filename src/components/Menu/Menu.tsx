import { MenuItem, MenuItemProps } from "./MenuItem";
import "./menu.css";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

export interface MenuProps {
  items?: MenuItemProps[];
  style?: React.CSSProperties;
  isOpen: boolean;
}

const handleItemClick = (item: MenuItemProps[], index: number) => {
  console.log(`Item clicked: ${item[index].label}`);
};

export const Menu = ({ items, style, isOpen }: MenuProps) => {
  return (
    <MenuDiv className={`menu-content${isOpen ? "-open": ""}`} style={style}>
      <ul className="menu-list">
        {items ? (
          items.map((item) => (
            <li key={uuidv4()}>
             <MenuItem
                  {...item}
                  onItemClick={() => handleItemClick(items, 0)}
                />
            </li>
          ))
        ) : (
          <></>
        )}
      </ul>
    </MenuDiv>
  );
};

export default Menu;

const MenuDiv = styled.div`
  display: ${(props) => (props.className == "menu-content-open" ? "block" : "none")};
  flex-direction: column;

  @media (min-width: 1024px) {
    display: block; // Always show on desktop
  }
`;




