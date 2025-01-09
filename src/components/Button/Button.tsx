import "./button.css"

type ButtonProps= Readonly<{
    children: string,
    onClick: () => void
}>;

export const Button = (props: ButtonProps) => {
    return (
        <button onClick={props.onClick}>{props.children}</button>
    )
}