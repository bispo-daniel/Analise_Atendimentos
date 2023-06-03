const express = require("express");
const router = express.Router();
const TicketModel = require("../models/TicketModel");

router.get('/', async (req, res) => {
    try {
        let tickets = await TicketModel.find();
        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router;