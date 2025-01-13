import { Header } from './Header';
import user from '../../../public/assets/user.svg';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    title: 'S.E.G. Recipe Collection',
  },
};

export const WithUser = {
  args: {
    title: 'S.E.G. Recipe Collection',
    user: {
      name: 'Ana',
      avatar: user, // Example avatar URL
    },
  },
};