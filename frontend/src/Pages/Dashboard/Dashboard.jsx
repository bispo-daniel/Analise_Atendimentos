import React, { useEffect, useState } from "react";
import "./Dashboard.css"
import Card from "../../Components/Card/Card";

function Dashboard() {
    const [tickets, setTickets] = useState();

    useEffect(() => {
        fetch("https://analise-atendimentos-backend.onrender.com/getData")
            .then(response => response.json())
            .then(json => setTickets(json.tickets))
    }, [])

    let countOpenStatus = 0;
    let countClosedStatus = 0;
    let countPendingStatus = 0;

    if (tickets != null) {
        tickets.forEach(element => {
            if (element.status === "open") {
                countOpenStatus++;
            } else if (element.status === "closed") {
                countClosedStatus++;
            } else if (element.status === "pending") {
                countPendingStatus++;
            }
        });
    
    }

    return (
        <main className="dashboardMain">
            <h1>Dashboard</h1>
            <div className="cardWrapper">
                <Card statusValue={countOpenStatus} statusType="Aberto" href="/openStatusTickets"/>
                <Card statusValue={countClosedStatus} statusType="Fechado" href="/closedStatusTickets"/>
                <Card statusValue={countPendingStatus} statusType="Pendente" href="/pendingStatusTickets"/>
            </div>
        </main>
    )
}

export default Dashboard;