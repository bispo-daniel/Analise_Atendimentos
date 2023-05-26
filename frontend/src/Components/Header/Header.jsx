import React from "react";
import './Header.css'

function Header() {
    function goBack() {
        window.history.back();
    }

    return (
        <header>
            <h1>Seja bem-vindo(a)!</h1>

            <button type="button" className="btn btn-light" onClick={e => goBack()}>
                Voltar
            </button>
        </header>
    )
}

export default Header;