import styled from "styled-components";
import '../../styles/tokens.css';

type ButtonProps= Readonly<{
    text: string | undefined,
    onClick: () => void,
    type: "button" | "submit" | undefined;
    primary?: boolean;
}>;

export const Button = (props: ButtonProps) => {
    const mode = props.primary ? "-button--primary" : "-button--secondary";
    return (
        <ButtonStyled className={["button", mode].join("")} type={props.type} onClick={props.onClick}>{props.text}</ButtonStyled>
    )
}

const ButtonStyled = styled.button<{className:string}>`
    background-color: ${props => props.className == "button-button--primary" ? "var(--color-primary)" :"var(--color-text-secondary)"};
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    color: ${props => props.className == "button-button--primary" ? "var(--color-background)" :"var(--color-hover)"}
`;
