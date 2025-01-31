import { Menu } from './Menu';
import { action } from '@storybook/addon-actions';
import { fn } from '@storybook/test';

// Sample menu items
const defaultMenuItems = [
  {
    label: 'Categories',
    subItems: [
      { label: 'Main Dishes'},
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
    onItemClick:  action('on-click'),
  },
  args:{
    onItemClick: fn(),
  }
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