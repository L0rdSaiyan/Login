import styles from "./InputText.module.css"
type InputProps = {
    text?: string;
    value: string;
    name: string
    event: (e: React.ChangeEvent<HTMLInputElement>) => void; // Adicione a propriedade onChange aqui
};

export default function InputText({text, value, name, event} : InputProps)
{
    return(
        <>
        <input 
        type="text" 
        placeholder={text}
        value={value}
        onChange={event}
        name={name}
        className={styles.inputText}
        />
        </>
    )
}