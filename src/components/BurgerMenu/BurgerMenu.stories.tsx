import { BurgerMenu } from './BurgerMenu';
import { action } from '@storybook/addon-actions';
import { fn } from '@storybook/test';

// Sample menu items
const defaultMenuItems = [
  { label: 'Home' },
  {
    label: 'Categories',
    subItems: [
      { label: 'Main Dishes' },
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
  title: 'Components/BurgerMenuIcon',
  component: BurgerMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onMenuToggle: { action: 'menuToggled' },
    menuItems: { control: 'object', defaultValue: defaultMenuItems},
    onClick: action('on-click'),
  },
  args: { onClick: fn() },
}

export const BurgerMenuIcon ={
  args: {
    menuItems: [
      { label: 'Home' },
      { label: 'About',},
      { label: 'Contact'},
    ],
  },
};