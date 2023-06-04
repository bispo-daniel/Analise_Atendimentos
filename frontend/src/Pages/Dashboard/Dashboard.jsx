import React, { useEffect, useState } from "react";
import "./Dashboard.css"
import Header from "../../Components/Header/Header";
import Card from "../../Components/Card/Card";

function Dashboard() {
    const [tickets, setTickets] = useState();

    useEffect(() => {
        fetch("https://analise-atendimentos-backend.onrender.com/getTickets")
            .then(response => response.json())
            .then(json => setTickets(json))
    }, [])

    let countOpenStatus = 0;
    let countClosedStatus = 0;
    let countPendingStatus = 0;

    if (tickets != null) {
        tickets.forEach(element => {
            if (element.type === "Aberto") {
                countOpenStatus++;
            } else if (element.type === "Fechado") {
                countClosedStatus++;
            } else if (element.type === "Pendente") {
                countPendingStatus++;
            }
        });
    
    }

    return (
        <>
            <Header />
            <main className="dashboardMain">
                <h1>Dashboard</h1>
                <div className="cardWrapper">
                    <Card statusValue={countOpenStatus} statusType="Abertos" href="/openStatusTickets"/>
                    <Card statusValue={countClosedStatus} statusType="Fechados" href="/closedStatusTickets"/>
                    <Card statusValue={countPendingStatus} statusType="Pendentes" href="/pendingStatusTickets"/>
                </div>
            </main>
        </>
    )
}

export default Dashboard;