import React from "react";
import axios from 'axios';
import "./Login.css"

import Message from "../../Scripts/Message";
import LoadingSpinner from "../../Scripts/LoadingSpinner";

function Login(){
    async function login(body){
        let responseMessage = '';

        await axios.post('https://analise-atendimentos-backend.onrender.com/auth', body)
            .then(response => {
                if (response.status === 200) {
                    let token = response.data.token;
                    localStorage.setItem('token', token);

                    responseMessage = response.data.message;
                } 
            })
            .catch(error => {
                responseMessage = error.response.data.message;
            })
            
        return responseMessage;
    }
    
    async function eventHandler() {
        let area = document.getElementsByClassName('buttonSpinnerArea')[0]
        LoadingSpinner(area);

        let emailInput = document.getElementById('emailInput').value
        let passwordInput = document.getElementById('passwordInput').value

        const credentials = {email: emailInput, password: passwordInput}

        const loginMessage = await login(credentials);

        if (loginMessage === "Usuário logado!") {
            Message(loginMessage);
            window.location.reload();
        } else {
            LoadingSpinner(area);
            Message(loginMessage);
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
        <main onKeyUp={e => enterDown(e)} className="loginMain">
            <h1>Login</h1>
            <input type="text" name="email" id="emailInput" placeholder="E-Mail"/>
            <input type="password" name="password" id="passwordInput" placeholder="Senha"/>

            <div className="buttonSpinnerArea">
                <button onClick={e => eventHandler()} id="loginButton">Entrar</button>
            </div>
            <p>Não tem uma conta? <a href="/signIn">Inscreva-se</a></p>
        </main>
    )
}

export default Login;