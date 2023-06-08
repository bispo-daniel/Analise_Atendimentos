import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Tickets.css'

import Header from '../../Components/Header/Header';
import Ticket from '../../Components/Ticket/Ticket';
import getTickets from '../../Scripts/GetTicketsByType'

function PendingStatusTickets() {
    const [tickets, setTickets] = useState();

    useEffect(() => {
        axios.get('https://analise-atendimentos-backend.onrender.com/getTickets').then(response => {
            let data = response.data
            setTickets(data);
        })
    }, [])

    let arrayOfArrays = getTickets(tickets, 'Pendente');

    return (
        <>
            <Header/>
            <main className='ticketWrapper'>
                {
                    arrayOfArrays != null ? arrayOfArrays.map((ticket, index) => {
                        return (
                            <Ticket key={index} ticketId={ticket[0]} ticketStatus='Pendente' clientName={ticket[2]} telephone={ticket[3]} createdAt={ticket[4]}/>
                        )
                    }) : console.log('Array nulo...')
                }
            </main>
        </>
    )
}

export default PendingStatusTickets;