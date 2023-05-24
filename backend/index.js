const express = require("express");
const port = 3001;

const dataJSON = require("./data/data.json");
const userJSON = require("./data/user.json");

const app = express();

app.get('/getUser', (req, res) => {
    if(req) {
        console.log("User JSON requested!");
    }
    res.json(userJSON);
})

app.get('/getData', (req, res) => {
    if(req) {
        console.log("Data JSON requested!");
    }
    res.json(dataJSON);
})

app.listen(port, () => {
    console.log("Backend running on " + port);
})