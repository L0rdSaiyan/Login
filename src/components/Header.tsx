import styles from "./Header.module.css"
export default function Header()
{
    return(
        <div className={styles.header_container}>
            <ul id={styles.list}>
                <li>Login</li>
                <li>Cadastrar</li>
            </ul>
        </div>
    )
}