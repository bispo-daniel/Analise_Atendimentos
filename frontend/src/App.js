import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import OpenStatusTickets from "./Pages/OpenStatusTickets";
import ClosedStatusTickets from "./Pages/ClosedStatusTickets";
import PendingStatusTickets from "./Pages/PendingStatusTicket";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/dashboard" element={< Dashboard/>} />
                <Route path="/openStatusTickets" element={< OpenStatusTickets/>} />
                <Route path="/closedStatusTickets" element={< ClosedStatusTickets/>} />
                <Route path="/pendingStatusTickets" element={< PendingStatusTickets/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;