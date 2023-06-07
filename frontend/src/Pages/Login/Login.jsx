import "./Login.css"
import axios from 'axios';
import React from "react";
const Message = require("../../Scripts/Message");

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
        let emailInput = document.getElementById('emailInput').value
        let passwordInput = document.getElementById('passwordInput').value

        const credentials = {email: emailInput, password: passwordInput}

        const loginMessage = await login(credentials);

        if (loginMessage === "Usuário logado!") {
            Message(loginMessage);
            window.location.reload();
        } else {
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
            <button onClick={e => eventHandler()}>Entrar</button>
            <p>Não tem uma conta? <a href="/signIn">Inscreva-se</a></p>
        </main>
    )
}

export default Login;