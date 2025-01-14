import {Navigation} from './Navigation';
import { MenuItemProps } from '../../components/Menu/MenuItem';
import { fn } from '@storybook/test';

// Sample menu items
const defaultMenuItems: MenuItemProps[]  = [
  { label: 'Home' },
  {
    label: 'Categories',
    subItems: [
      { label: 'Main Dishes'},
      { label: 'Bread & Pastries'},
      { 
        label: 'Desserts',
        subItems: [
          { label: 'Flan'  },
          { label: 'Pie' },
          { label: 'Cookies' },  
          { label: 'CheeseCake' },
          { label: 'Ice Cream' },
          { label: 'Pudding' },
          { label: 'Candy' },
          { label: 'Fruit' },
          { label: 'Chocolate' },
          { label: 'Cake' },
        ]
      },
      { label: 'Beverages' },
    ],
  },
  { label: 'Favorites'},
  { label: 'Settings' },
];

export default {
  title: 'Components/ResponsiveNavigationMenu',
  component: Navigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: { 
  },
  args: {  onItemClick: fn(), },
}

export const SimpleMenu ={
  args: {
    menuItems: [
      { label: 'Home' },
      { label: 'About',},
      { label: 'Contact'},
    ],
  },
};

export const NestedMenu ={
  args: {
    menuItems: defaultMenuItems,
  },
};