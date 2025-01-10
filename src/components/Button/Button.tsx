import "./button.css"

type ButtonProps= Readonly<{
    text: string | undefined,
    onClick: () => void,
    type: "button" | "submit" | undefined;
}>;

export const Button = (props: ButtonProps) => {
    return (
        <button className="button" type={props.type}onClick={props.onClick}>{props.text}</button>
    )
}