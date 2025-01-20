import { default as default_2 } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';

export declare const ApplicationLayer: () => JSX_2.Element;

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

export declare const Checkbox: default_2.FC<CheckboxGroupProps>;

declare interface CheckboxGroupProps {
    options: {
        label: string;
        value: string;
    }[];
    name: string;
    selectedValue: string;
    onChange: (event: default_2.ChangeEvent<HTMLInputElement>) => void;
}

export declare const Header: ({ title, logo, user, isSearch, onSearch, children }: HeaderProps) => JSX_2.Element;

declare interface HeaderProps {
    title: string;
    logo?: string;
    user?: User;
    isSearch?: boolean;
    onSearch?: (query: string) => void;
    children?: React.ReactNode;
}

export declare const Input: default_2.FC<InputProps>;

declare interface InputProps {
    type: InputType;
    label: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    options?: {
        label: string;
        value: string;
    }[];
    error?: string;
    disabled?: boolean;
    min?: number;
    max?: number;
}

declare type InputType = 'text' | 'number' | 'textarea' | 'select' | "RADIO" | "CHECKBOX";

export declare const Logo: React.FC;

export declare const Menu: ({ items, style, isOpen }: MenuProps) => JSX_2.Element;

export declare const MenuItem: default_2.FC<MenuItemProps>;

declare interface MenuItemProps {
    label: string;
    icon?: default_2.ComponentType<default_2.SVGProps<SVGSVGElement>> | null;
    subItems?: MenuItemProps[];
    onItemClick?: () => void;
}

declare interface MenuProps {
    items?: MenuItemProps[];
    style?: React.CSSProperties;
    isOpen: boolean;
}

export declare const Navigation: ({ menuItems }: {
    menuItems: MenuItemProps[];
}) => JSX_2.Element;

export declare const RadioButton: default_2.FC<RadioButtonGroupProps>;

declare interface RadioButtonGroupProps {
    options: {
        label: string;
        value: string;
    }[];
    name: string;
    selectedValue: string;
    onChange: (event: default_2.ChangeEvent<HTMLInputElement>) => void;
}

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
