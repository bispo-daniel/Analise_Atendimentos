import React, { useEffect, useState } from "react";
import "./Dashboard.css"
import axios from "axios";

import Header from "../../Components/Header/Header";
import Card from "../../Components/Card/Card";

function Dashboard() {
    const [tickets, setTickets] = useState();

    useEffect(() => {
        axios.get('https://analise-atendimentos-backend.onrender.com/getTickets').then(response => {
            let data = response.data;
            setTickets(data);
        });
    }, [])

    let countOpenStatus = 0;
    let countClosedStatus = 0;
    let countPendingStatus = 0;
    let countTickets = 0;

    if (tickets != null) {
        tickets.forEach(element => {
            if (element.type === "Aberto") {
                countOpenStatus++;
                countTickets++;
            } else if (element.type === "Fechado") {
                countClosedStatus++;
                countTickets++;
            } else if (element.type === "Pendente") {
                countPendingStatus++;
                countTickets++;
            }
        });
    
    }

    return (
        <>
            <Header />
            <main className="dashboardMain">
                <h1>Dashboard</h1>
                <div className="cardWrapper">
                    <div className="inlineCards">
                        <Card statusValue={countOpenStatus} statusType="Abertos" href="/openStatusTickets" width="25%"/>
                        <Card statusValue={countClosedStatus} statusType="Fechados" href="/closedStatusTickets" width="25%"/>
                        <Card statusValue={countPendingStatus} statusType="Pendentes" href="/pendingStatusTickets" width="25%"/>
                    </div>
                    <div className="full">
                        <Card statusValue={countTickets} statusType="Todos" href="/allTickets" width="90%"/>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Dashboard;