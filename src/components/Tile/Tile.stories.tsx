import {Tile} from './Tile';
import { action } from '@storybook/addon-actions';
import { fn } from '@storybook/test';
import { Button } from '../Button/Button';

export default {
  title: 'Components/Tile',
  component: Tile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    onClick:  action('on-click'),
    style: { control: 'object' },
    children:{control: 'object'}
  },
  args:{ title:"Tile title",
    onClick: fn(),}
} 

export const TileWithDescription = {
  args: {
    title: 'Tile',
    children: <><p>Inside tiles you can add other components</p><Button primary text={"Press me"} onClick={()=> {

    } } type={"button"}/></>
  },
};
