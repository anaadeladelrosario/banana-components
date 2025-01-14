import { Header } from './Header';
import user from '../../assets/user.svg';
import logo from '../../assets/banana.png'

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes:{title: {control:'text', logo:{control:'text'}, onSearch:{control:'boolean', defaultValue: true}, }}
};

export const DefaultLogo = {
  args: {
    logo:logo,
    title: 'Banana Components',
  },
};

export const WithSearchBar = {
  args: {
    title: 'Banana Components',
    onSearch: true,
  },
};

export const WithUser = {
  args: {
    title: 'Banana Components',
    user: {
      name: 'Ana',
      avatar: user, // Example avatar URL
    },
  },
};