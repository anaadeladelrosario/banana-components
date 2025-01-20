import { MenuItem } from './MenuItem';
import { action } from '@storybook/addon-actions';
import { fn } from '@storybook/test';

// Sample menu items
const defaultMenuItems = [
  {
    label: 'Categories',
    subItems: [
      { label: 'Main Dishes', link: '#',},
      { label: 'Bread & Pastries', link: '#'},
    ],
  },
];

const iconOptions: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>> | null> = {
    Home: null, // Option for Home icon
    None: null, // Option for no icon
  };

  export default {
  title: 'Components/MenuItem',
  component: MenuItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    icon: { control: { type: 'select' }, options:Object.keys(iconOptions)},
    subItems: { control: 'object', defaultValue: defaultMenuItems},
    onItemClick:  action('on-click'),
  },
  args:{
    onItemClick: fn(),
  }
} 

// You can add more stories with different menu configurations
export const MenuItemSimpleWithIcon= {
  args: {
    label: 'Home',
    subItems: [],
  },
};

export const MenuItemWithSubItems = {
  args: {
    label: 'Recipes',
    subItems: defaultMenuItems,
  },
};