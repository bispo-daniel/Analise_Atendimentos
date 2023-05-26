const express = require("express");
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const dataRoute = require('./routes/dataRoute');
const AuthRoute = require('./routes/AuthRoute');
const SignInRoute = require('./routes/SignInRoute');

const User = require('./models/UserModel');

app.use(express.json());

const connectionString = process.env.SECRET_CONNECTION_STRING;

mongoose.connect(connectionString)
    .then(() => {
        console.log('connected');

        app.use(cors());

        app.use('/auth', AuthRoute);

        app.use('/signIn', SignInRoute);

        app.use('/getData', dataRoute);

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