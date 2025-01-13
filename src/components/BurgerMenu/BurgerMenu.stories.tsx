import { BurgerMenu } from './BurgerMenu';
import { action } from '@storybook/addon-actions';
import { fn } from '@storybook/test';


export default {
  title: 'Components/BurgerMenu',
  component: BurgerMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onMenuToggle: { action: 'menuToggled' },
    onClick: action('on-click'),
  },
  args: { onClick: fn() },
}

export const SimpleMenu ={
  args: {
  },
};