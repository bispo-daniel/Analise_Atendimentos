import React, { useEffect, useState } from "react";
import "./Login.css"

function Login(){
    const [user, setUser] = useState();
    const [password, setPassword] = useState();

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

    useEffect(() => {
        fetch("/getUser")
            .then(response => response.json())
            .then(json => {
                setUser(json.username);
                setPassword(json.password);
            })
    }, [])

    function eventHandler() {
        let usernameInput = document.getElementById("usernameInput");
        let passwordInput = document.getElementById("passwordInput");

        if (user === usernameInput.value && password === passwordInput.value) {
            window.location = "/dashboard";
        } else {
            accountNotFound();
        }
    }

    const enterDown = (e) => {
        let keyCode = e.code || e.key
        if(keyCode === 'Enter'){
            eventHandler()
        }
    }

    return (
        <main onKeyUp={e => enterDown(e)} className="loginMain">
            <h1>Login</h1>
            <input type="text" name="" id="usernameInput" placeholder="Usuário"/>
            <input type="password" name="" id="passwordInput" placeholder="Senha"/>
            <button onClick={e => eventHandler()}>Entrar</button>
        </main>
    )
}

export default Login;