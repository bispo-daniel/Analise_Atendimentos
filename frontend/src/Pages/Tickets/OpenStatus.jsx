import React, { useEffect, useState } from "react";
import "./Tickets.css"
import Ticket from "../../Components/Ticket/Ticket";
import {get} from "../../Scripts/getTicketsByStatusType"
import Header from "../../Components/Header/Header";

function OpenStatusTickets() {
    const [tickets, setTickets] = useState();

    useEffect(() => {
        fetch('https://analise-atendimentos-backend.onrender.com/getTickets')
            .then(response => response.json())
            .then(json => setTickets(json))
    }, [])

    let arrayOfArrays = get(tickets, "Aberto");

    return (
        <>
            <Header/>
            <main className="ticketWrapper">
                {
                    arrayOfArrays != null? arrayOfArrays.map((arr, index) => {
                        return (
                            <Ticket key={index} ticketId={arr[0]} ticketStatus="Aberto" contactName={arr[2]} contactNumber={arr[3]} createdAt={arr[4]}/>
                        )
                    }) : console.log("Array nulo...")
                }
            </main>
        </>
    )
}

export default OpenStatusTickets;