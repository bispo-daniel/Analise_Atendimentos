import "./Login.css"
import axios from 'axios';
import React from "react";
const errorMessage = require("../../Scripts/errorMessage");

function Login(){

    async function login(body){
        try {
            let response = await axios.post('https://analise-atendimentos-backend.onrender.com/auth', body);

            if (response.status === 200 && response.data.message === 'User logged!') {
                let token = response.data.token;
                localStorage.setItem('token', token);
                
                return true
            } else {
                return false
            }
        } catch (error) {
            console.error(error);
        }
    }
    
    async function eventHandler() {
        let emailInput = document.getElementById('emailInput').value
        let passwordInput = document.getElementById('passwordInput').value

        const credentials = {email: emailInput, password: passwordInput}

        const user = await login(credentials);

        if(!user) {
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