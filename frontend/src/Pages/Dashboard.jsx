import React, { useEffect, useState } from "react";
import "./Dashboard.css"
import Card from "../Components/Card";

function Dashboard() {
    const [tickets, setTickets] = useState();

    useEffect(() => {
        fetch("/getData")
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
            <h1>Tickets</h1>
            <div className="cardWrapper">
                <Card statusValue={countOpenStatus} statusType="Open" href="/openStatusTickets"/>
                <Card statusValue={countClosedStatus} statusType="Closed" href="/closedStatusTickets"/>
                <Card statusValue={countPendingStatus} statusType="Pending" href="/pendingStatusTickets"/>
            </div>
        </main>
    )
}

export default Dashboard;