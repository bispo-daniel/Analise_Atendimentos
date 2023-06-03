const mongoose = require("mongoose");

const TicketSchema = mongoose.Schema (
    {
        number: {
            type: Number,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        clientName: {
            type: String,
            required: true
        },
        telephone: {
            type: Number,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
)

let TicketModel = mongoose.model("Ticket", TicketSchema);

module.exports = TicketModel;