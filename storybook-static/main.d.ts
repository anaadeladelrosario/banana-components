import { default as default_2 } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';

export declare const Button: (props: ButtonProps) => JSX_2.Element;

declare type ButtonProps = Readonly<{
    text: string | undefined;
    onClick: () => void;
    type: "button" | "submit" | undefined;
}>;

export declare function Tile({ image, title, description, onClick, style, children, }: TileProps): JSX_2.Element;

declare interface TileProps {
    image?: string;
    title?: string;
    description?: string;
    onClick: () => void;
    buttonText?: string;
    onButtonClick?: () => void;
    style?: default_2.CSSProperties;
    children?: default_2.ReactNode;
}

export { }
