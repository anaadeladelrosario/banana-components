import { Menu } from './Menu';
import user from '../../../public/assets/user.svg'

// Sample menu items
const defaultMenuItems = [
  {
    label: 'Categories',
    items: [
      { label: 'Main Dishes', icon: user },
      { label: 'Bread & Pastries'},
    ],
  },
];

export default {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    items: { control: 'object', defaultValue: defaultMenuItems},
  },
}



// You can add more stories with different menu configurations
export const MenuSimple = {
  args: {
    title: 'Menu Simple',
    items: [  
        { label: 'Home' },
        { label: 'About' },
        { label: 'Contact' }
    ],
  },
};

export const MenuWithNestedMenuItems = {
  args: {
    title: 'Menu with nested items',
    items: defaultMenuItems,
  },
};

export const MenuWithNoTitle = {
  args: {
    title: '',
    items: defaultMenuItems
  },
};