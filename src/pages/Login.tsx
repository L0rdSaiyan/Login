import React, { useState } from 'react';
import styles from './Login.module.css';
import InputText from '../form/InputText';
import InputPass from '../form/InputPass';
import InputFile from '../form/InputFile';
import SubmitBtn from '../form/SubmitBtn';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
        console.log(username);
    };

    const handlePass = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await fetch('http://localhost:8081/cadastrorealizado', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: username, senha: password }),
            });
            // Lógica de redirecionamento ou feedback de sucesso aqui
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            // Lógica de tratamento de erro aqui
        }
    };

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
