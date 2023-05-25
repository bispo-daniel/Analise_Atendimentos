const express = require("express");
const router = express.Router();
const dataJSON = require("../data/data.json");

router.get('/', (req, res) => {
    try {
        if(req) {
            console.log("Data JSON requested!");
        }
        res.status(200).json(dataJSON);
    } catch (error) {
        res.send(500).json({message: error.message})
    }
})

module.exports = router;