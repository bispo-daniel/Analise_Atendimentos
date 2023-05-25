const express = require('express');
const router = express.Router();
const UserModel = require('../models/UserModel')

router.post('/', async (req, res) => {
    try {
        let user = await UserModel.create(req.body);
        res.status(200).json({message: "Usuário criado!"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

module.exports = router;