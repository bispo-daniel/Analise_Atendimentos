import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Tickets.css'

import Header from '../../Components/Header/Header';
import Ticket from '../../Components/Ticket/Ticket';

function AllTickets() {
    const [tickets, setTickets] = useState();

    useEffect(() => {
        axios.get('https://analise-atendimentos-backend.onrender.com/getTickets')
            .then(response => {
                let tickets = response.data;
                setTickets(tickets);
            })
    }, []);

    let arrayOfArrays = [];

    if(tickets) {
        tickets.filter(ticket => {

            let date = new Date(ticket.telephone).toLocaleString();

            let newArray = [ticket.number, ticket.type, ticket.clientName, ticket.telephone, date];
            arrayOfArrays.push(newArray);

            return true;
        })
    }

    return (
        <>
            <Header/>
            <main className='ticketWrapper'>
                {
                    arrayOfArrays != null ? arrayOfArrays.map((ticket, index) => {
                        return (
                            <Ticket key={index} ticketId={ticket[0]} ticketStatus={ticket[1]} clientName={ticket[2]} telephone={ticket[3]} createdAt={ticket[4]}/>
                        )
                    }) : console.log('Array nulo...')
                }
            </main>
        </>
    )
}

export default AllTickets;