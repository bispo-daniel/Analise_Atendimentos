import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import jwtDecode from "jwt-decode"

import Login from "./Pages/Login/Login";
import SignIn from "./Pages/SignIn/SignIn";
import Dashboard from "./Pages/Dashboard/Dashboard";
import OpenStatusTickets from "./Pages/Tickets/OpenStatus";
import ClosedStatusTickets from "./Pages/Tickets/ClosedStatus";
import PendingStatusTickets from "./Pages/Tickets/PendingStatus";
import CreateTicket from "./Pages/CreateTicket/CreateTicket"
import Loading from "./Pages/Loading/Loading.jsx"

function App() {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            let token = localStorage.getItem('token');

            if (token) {
                const decoded = jwtDecode(token);
                setUser(decoded);
            }

            setIsLoading(false);
        }, 100)
    }, [])

    if (isLoading) {
        return <Loading/>
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {
                    user ? <Dashboard /> : <Navigate to="/login" />
                } />
                <Route path="/login" element={
                    user ? <Navigate to="/" /> : <Login/> 
                } />
                <Route path="/signIn" element= {
                    user ? <Navigate to="/dashboard" /> : <SignIn />
                } />
                <Route path="/dashboard" element= {
                    user ? <Dashboard/> : <Navigate to="/" />
                } />
                <Route path="/openStatusTickets" element= {
                    user ? <OpenStatusTickets/> : <Navigate to="/" />
                } />
                <Route path="/closedStatusTickets" element= {
                    user ? <ClosedStatusTickets/> : <Navigate to="/" />
                } />
                <Route path="/pendingStatusTickets" element= {
                    user ? <PendingStatusTickets/> : <Navigate to="/" />
                } />
                <Route path="/createTicket" element={
                    user ? <CreateTicket/> : <Navigate to="/" />
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default App;