import React from "react";
import "./SignIn.css";
import axios from 'axios';
const errorMessage = require("../../Scripts/errorMessage");

function SignIn() {

    async function apiCall(body) {
        try {

            await axios.post('https://analise-atendimentos-backend.onrender.com/signIn', body);
            return true;
            
        } catch (error) {
            console.error();
            errorMessage();
        }
    }

    async function eventHandler() {
        let emailInput = document.getElementById('emailInput').value
        let usernameInput = document.getElementById('usernameInput').value
        let passwordInput = document.getElementById('passwordInput').value

        const body = {
            email: emailInput,
            username: usernameInput,
            password: passwordInput
        }

        let userCreated = await apiCall(body);

        if(!userCreated) {
            errorMessage();
        } else {
            window.location = '/'
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

            <button onClick={e => eventHandler()}>Criar</button>
        </main>
    )
}

export default SignIn;