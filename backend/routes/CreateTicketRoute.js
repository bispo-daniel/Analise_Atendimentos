const express = require("express");
const router = express.Router();
const TicketModel = require("../models/TicketModel");

router.post('/', async (req, res) => {
    try {
        let { number } = req.body;

        const ticketExists = await TicketModel.find({number: number});

        if (ticketExists.length > 0) {
            res.status(500).json({message: "Já foi criado um ticket com esse número"});
        } else {
            await TicketModel.create(req.body);
            res.status(200).json({message: "Ticket criado com sucesso!"});
        }

    } catch (error) {
        res.status(500).json({message: "Ticket não pode ser criado"});
    }
})

module.exports = router;