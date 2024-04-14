import React, { useState } from 'react';
import styles from './SingUP.module.css';
import InputText from '../components/form/InputText';
import InputPass from '../components/form/InputPass';
import InputFile from '../components/form/InputFile';
import SubmitBtn from '../components/form/SubmitBtn';
import axios from 'axios';

export default function Login() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirm, setConfirm] = useState<string>('')

    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
        console.log(username);
    };

    const handlePass = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
        console.log(password)
    };

    const handleConfirmPass = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirm(event.target.value)
        console.log(confirm)
    }

    const validateUser= () : boolean =>
    {
        if(password === confirm)
        {
            return true;
        }
        else
        {
            return false
        }
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) =>
    {
        event?.preventDefault()

        if(validateUser())
        {
            const data = {
                name: username,
                senha: password
            }
    
            axios.post('http://localhost:8081/cadastrorealizado', data)
            .then((response)=>
            {
                console.log(`Resposta do Servidor : ${response.data}`)
                //response data pega o valor passado para o res.send no express. Massa
    
            })
            .catch((error) =>
            {
                console.log(`Erro ao fazer a solicitação : ${error}`)
            })
        }
        else
        {
            window.alert("as senhas não conferem")
            return;
        }

     
    }


    return (
        <div className={styles.container}>
            <div className={styles.form_container}>
                <div className={styles.profilePic}>
                    <InputFile />
                </div>
                <form onSubmit={handleSubmit}>
                    <InputText
                        text="Insira o seu nome de usuário"
                        value={username}
                        event={handleName}
                        name="user"
                    />
                    <InputPass
                        text="Confirme sua senha"
                        value={confirm}
                        event={handleConfirmPass}
                        name="pass"
                    />    
                    <InputPass
                        text="Crie uma senha"
                        value={password}
                        event={handlePass}
                        name="pass"
                    />
                 

                    

                    <SubmitBtn text="Cadastrar" />
                </form>
            </div>
        </div>
    );
}
