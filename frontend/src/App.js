import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Pages/Login/Login";
import SignIn from "./Pages/SignIn/SignIn";
import Dashboard from "./Pages/Dashboard/Dashboard";
import OpenStatusTickets from "./Pages/Tickets/OpenStatus";
import ClosedStatusTickets from "./Pages/Tickets/ClosedStatus";
import PendingStatusTickets from "./Pages/Tickets/PendingStatus";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/signIn" element={<SignIn />}/>
                <Route path="/dashboard" element={< Dashboard/>} />
                <Route path="/openStatusTickets" element={< OpenStatusTickets/>} />
                <Route path="/closedStatusTickets" element={< ClosedStatusTickets/>} />
                <Route path="/pendingStatusTickets" element={< PendingStatusTickets/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;