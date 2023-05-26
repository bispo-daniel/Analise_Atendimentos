import "./Login.css"
import axios from 'axios';
import React from "react";

function Login(){
    function accountNotFound() {
        if(!document.getElementById('accountNotFound')) {
            let p = document.createElement('p');
            p.setAttribute("id", "accountNotFound")
            p.style.color = 'red';
            p.innerHTML = 'Conta não encontrada...'
    
            let loginMain = document.getElementsByClassName('loginMain')[0];
            loginMain.appendChild(p);
        } 
    }

    async function login(body){
        try {
            await axios.post('/api/auth', body);

            return true
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
            accountNotFound();
        } else {
            window.location = '/dashboard';
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
            <input type="text" name="email" id="emailInput" placeholder="Usuário"/>
            <input type="password" name="password" id="passwordInput" placeholder="Senha"/>
            <button onClick={e => eventHandler()}>Entrar</button>
            <p>Não tem uma conta? <a href="/signIn">Inscreva-se</a></p>
        </main>
    )
}

export default Login;