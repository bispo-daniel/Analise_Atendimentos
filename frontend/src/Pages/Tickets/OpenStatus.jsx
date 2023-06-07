import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Tickets.css"

import Header from "../../Components/Header/Header";
import Ticket from "../../Components/Ticket/Ticket";
import { get } from "../../Scripts/getTicketsByStatusType"

function OpenStatusTickets() {
    const [tickets, setTickets] = useState();

    useEffect(() => {
        axios.get('https://analise-atendimentos-backend.onrender.com/getTickets').then(response => {
            let data = response.data;
            setTickets(data);
        })
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