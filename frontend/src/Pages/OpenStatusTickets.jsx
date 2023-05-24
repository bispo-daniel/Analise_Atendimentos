import React, { useEffect, useState } from "react";
import "./open.css"
import Ticket from "../Components/Ticket";
import {get} from "../Scripts/getTicketsByStatusType"

function OpenStatusTickets() {
    const [tickets, setTickets] = useState();

    useEffect(() => {
        fetch('/getData')
            .then(response => response.json())
            .then(json => setTickets(json.tickets))
    }, [])

    let arrayOfArrays = get(tickets, "open");

    return (
        <main className="ticketWrapper">
            {
                arrayOfArrays != null? arrayOfArrays.map((arr, index) => {
                    return (
                        <Ticket key={index} ticketId={arr[0]} ticketStatus={arr[1]} contactName={arr[2]} contactNumber={arr[3]} createdAt={arr[4]}/>
                    )
                }) : console.log("Array nulo...")
            }
        </main>
    )
}

export default OpenStatusTickets;