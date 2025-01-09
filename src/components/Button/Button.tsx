import "./button.css"

type ButtonProps= Readonly<{
    text: string| undefined,
    onClick: () => void
}>;

export const Button = (props: ButtonProps) => {
    return (
        <button onClick={props.onClick}>{props.text}</button>
    )
}