const express = require("express");
const router = express.Router();
const TicketModel = require("../models/TicketModel");

router.post('/', async (req, res) => {
    try {
        const ticket = await TicketModel.create(req.body);
        res.status(200).json({message: "Ticket created!"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

module.exports = router;