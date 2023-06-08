import React from "react";
import "./Ticket.css"

function Ticket(props) {
    return (
        <main className="ticketMain">
            <h1>{props.ticketId} - {props.ticketStatus}</h1>
            <p>Cliente: {props.clientName}</p>
            <p>Telefone: {props.telephone}</p>
            <hr />
            <p>Criado em:</p>
            <p>{props.createdAt}</p>
        </main>
    )
}

export default Ticket;