import React from "react";
import axios from 'axios';
import "./SignIn.css";

import Message from "../../Scripts/Message";
import LoadingSpinner from "../../Scripts/LoadingSpinner";

function SignIn() {
    let executed = false;

    async function signIn(body) {
        let responseMessage = '';

        if (!executed) {

            await axios.post('https://analise-atendimentos-backend.onrender.com/signIn', body)
                .then(response => {
                    if(response.status === 200) {
                        executed = true;
                        responseMessage = response.data.message;
                    }
                })
                .catch(error => {
                    responseMessage = error.response.data.message;
                })
            }
        
        return responseMessage;
    }

    async function eventHandler() {
        LoadingSpinner();

        let emailInput = document.getElementById('emailInput').value
        let usernameInput = document.getElementById('usernameInput').value
        let passwordInput = document.getElementById('passwordInput').value

        const body = {
            email: emailInput,
            username: usernameInput,
            password: passwordInput
        }

        let signInMessage = await signIn(body);

        if(signInMessage === "Usuário criado com sucesso!") {
            Message(signInMessage);
            window.location = '/';
        } else {
            LoadingSpinner();
            Message(signInMessage);
        }
    }
    
    const enterDown = (e) => {
        e.preventDefault();
        let keyCode = e.code || e.key
        if(keyCode === 'Enter'){
            eventHandler()
        }
    }

    return (
        <main className="signInMain" onKeyUp={e => enterDown(e)}>
            <h1>Crie sua conta</h1>

            <input type="text" name="" id="emailInput" placeholder="E-mail"/>
            <input type="text" name="" id="usernameInput" placeholder="Nome de Usuário"/>
            <input type="text" name="" id="passwordInput" placeholder="Senha"/>

            <div className="buttonSpinnerArea">
                <button onClick={e => eventHandler()}>Criar</button>

                <div className="spinner-border text-success" role="status" />
            </div>
        </main>
    )
}

export default SignIn;