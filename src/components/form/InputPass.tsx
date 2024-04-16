import styles from "./InputPass.module.css"

type InputProps = {
    text?: string;
    value?: string;
    name: string
    event?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Adicione a propriedade onChange aqui
};



export default function InputPass({text, value, name, event} : InputProps)
{
    return(
        <>
            <input type="password" 
            placeholder={text}
            value={value}
            onChange={event}
            name={name}
            className={styles.inputpass}
            />
        </>
    )
}