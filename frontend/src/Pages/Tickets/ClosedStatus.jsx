import React, { useEffect, useState } from "react";
import "./Tickets.css"
import Ticket from "../../Components/Ticket";
import { get } from "../../Scripts/getTicketsByStatusType"

function ClosedStatusTickets() {
    const [tickets, setTickets] = useState();

    useEffect(() => {
        fetch('/getData')
            .then(response => response.json())
            .then(json => setTickets(json.tickets))
    }, [])

    let arrayOfArrays = get(tickets, "closed");

    return (
        <main className="ticketWrapper">
            {
                arrayOfArrays != null? arrayOfArrays.map((arr, index) => {
                    return (
                        <Ticket key={index} ticketId={arr[0]} ticketStatus="Fechado" contactName={arr[2]} contactNumber={arr[3]} createdAt={arr[4]}/>
                    )
                }) : console.log("Array nulo...")
            }
        </main>
    )
}

export default ClosedStatusTickets;