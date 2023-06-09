const express = require("express");
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const AuthRoute = require('./routes/AuthRoute');
const SignInRoute = require('./routes/SignInRoute');
const CreateTicketRoute = require('./routes/CreateTicketRoute');
const GetTicketsRoute = require('./routes/GetTicketsRoute');

app.use(express.json());

const connectionString = process.env.SECRET_CONNECTION_STRING;

mongoose.connect(connectionString)
    .then(() => {
        console.log('connected');

        app.use(cors());

        app.use('/auth', AuthRoute);

        app.use('/signIn', SignInRoute);

        app.use('/createTicket', CreateTicketRoute);

        app.use('/getTickets', GetTicketsRoute);

        app.listen(3001, () => {
            console.log("Backend running on 3001");
        })

    })
    .catch(err => console.error(err))

// npm install express
// npm install mongoose
// npm install dotenv
// npm install nodemon
// npm install cors
// npm install jsonwebtoken