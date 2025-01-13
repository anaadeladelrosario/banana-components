import { default as default_2 } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';

export declare const BurgerMenu: default_2.FC<BurgerMenuProps>;

declare interface BurgerMenuProps {
    onMenuToggle?: (isOpen: boolean) => void;
    onClick?: () => void;
    style?: default_2.CSSProperties;
}

export declare const Button: (props: ButtonProps) => JSX_2.Element;

declare type ButtonProps = Readonly<{
    text: string | undefined;
    onClick: () => void;
    type: "button" | "submit" | undefined;
    primary?: boolean;
}>;

export declare const Header: ({ title, user, onSearch }: HeaderProps) => JSX_2.Element;

declare interface HeaderProps {
    title: string;
    user?: User;
    onSearch?: (query: string) => void;
}

export declare const Logo: React.FC;

export declare function Tile({ title, onClick, style, children, }: TileProps): JSX_2.Element;

declare interface TileProps {
    title?: string;
    onClick: () => void;
    style?: default_2.CSSProperties;
    children?: default_2.ReactNode;
}

declare interface User {
    name: string;
    avatar?: string;
}

export { }
