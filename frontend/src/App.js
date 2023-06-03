import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Pages/Login/Login";
import SignIn from "./Pages/SignIn/SignIn";
import Dashboard from "./Pages/Dashboard/Dashboard";
import OpenStatusTickets from "./Pages/Tickets/OpenStatus";
import ClosedStatusTickets from "./Pages/Tickets/ClosedStatus";
import PendingStatusTickets from "./Pages/Tickets/PendingStatus";
import CreateTicket from "./Pages/CreateTicket/CreateTicket"

import Header from "./Components/Header/Header";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/signIn" element={<SignIn />}/>
                <Route path="/dashboard" element={<> <Header/><Dashboard/> </>} />
                <Route path="/openStatusTickets" element={<> <Header/> <OpenStatusTickets/> </>} />
                <Route path="/closedStatusTickets" element={<> <Header/> <ClosedStatusTickets/> </>} />
                <Route path="/pendingStatusTickets" element={<> <Header/> <PendingStatusTickets/> </>} />
                <Route path="/createTicket" element={<> <Header/> <CreateTicket/> </>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;