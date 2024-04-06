import styles from "./SubmitBtn.module.css"
type submitBtnTypes = 
{
    text ?: string
}

export default function SubmitBtn({text = "Enviar"} : submitBtnTypes)
{
    return(
        <>
            <input 
            type="submit"
            value={text}
            className={styles.submitBtn}
            />
        </>
    )
}