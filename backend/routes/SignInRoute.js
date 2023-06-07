const express = require('express');
const router = express.Router();
const UserModel = require('../models/UserModel')

router.post('/', async (req, res) => {
    try {

        let { email } = req.body;

        let userExist = await UserModel.find({email: email});

        if(userExist.length !== 0) {
            res.status(500).json({message: "Usuário já existe!"});
        } else {
            await UserModel.create(req.body);

            res.status(200).json({message: "Usuário criado com sucesso!"});
        }

    } catch (error) {
        res.status(500).json({message: "Usuário não pode ser criado"});
    }
})

module.exports = router;