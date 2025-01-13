import { MenuItem, MenuItemProps } from "./MenuItem";
import "./menu.css";
import { v4 as uuidv4 } from "uuid";

export interface MenuProps {
  items?: MenuItemProps[];
  style?: React.CSSProperties;
}

const handleItemClick = (item: MenuItemProps[], index: number) => {
  console.log(`Item clicked: ${item[index].label}`);
};

export const Menu = ({ items, style }: MenuProps) => {
  return (
    <div   style={style}>
      <ul className="menu-list">
        {items ? (
          items.map((item) => (
            <li key={uuidv4()}>
              <a>
                <MenuItem
                  {...item}
                  onItemClick={() => handleItemClick(items, 0)}
                />
              </a>
            </li>
          ))
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};

export default Menu;


