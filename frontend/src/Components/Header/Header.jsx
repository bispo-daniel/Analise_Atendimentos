import React, { useEffect } from "react";
import './Header.css'

function Header() {
    useEffect(() => {
        let path = window.location.pathname;

        if(path === "/dashboard"){
            let dashboardButton = document.getElementById('dashboardButton');
            dashboardButton.className = 'active';
        } else if(path === "/createTicket") {
            let createTicketButton = document.getElementById('createTicketButton');
            createTicketButton.className = 'active';
        }
    }, [])

    return (
        <header>
            <div className="buttonWrapper">
                <a href="/dashboard">
                    <button id="dashboardButton">
                        Dashboard
                    </button>
                </a>
                <a href="/createTicket">
                    <button id="createTicketButton">
                        Criar Ticket
                    </button>
                </a>
            </div>
        </header>
    )
}

export default Header;