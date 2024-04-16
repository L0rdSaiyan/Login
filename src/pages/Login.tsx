import InputPass from "../components/form/InputPass"
import InputText from "../components/form/InputText"
import SubmitBtn from "../components/form/SubmitBtn"
import styles from "./Login.module.css"
import axios from "axios"
import React, { useState } from "react"
export default function Login()
{
    const [userName,setUserName] = useState<string>()
    const [userPass,setUserPass] = useState<string>()

    const handleUserChange = (event : React.ChangeEvent<HTMLInputElement>) =>
    {
        setUserName(event.target.value)
        console.log(userName)
    }

    const handlePassChange = (event : React.ChangeEvent<HTMLInputElement>) =>
    {
        setUserPass(event.target.value)
    }

    async function getUser(event : React.FormEvent<HTMLFormElement>) 
    {
        event.preventDefault()
        axios.get('http://localhost:8081/login', {
            params: {
                username: userName,
                userpass: userPass
            }
        }).then((response) =>
        {
            console.log(`Usuário encontrado: ${JSON.stringify(response.data)}`)
        })
        .catch((error)=>
        {
            console.log(`Erro ao encontrar o usuário: ${error}`)
        })
    }

    return(
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <form onSubmit={getUser}>
            <h1>Login</h1>
                <InputText
                name="user"
                event={handleUserChange}
                />
                <InputPass 
                name="pass"
                event={handlePassChange}
                />
                <SubmitBtn
                text="Enviar"
                />

                </form>
             
            </div>
        </div>
    )
}