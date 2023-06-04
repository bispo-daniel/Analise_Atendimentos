const express = require('express');
const router = express.Router();
const UserModel = require('../models/UserModel');
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await UserModel.find({email : email});
        
        if(!user[0]) {
            return res.status(404).json({message: "user not found..."})
        } else {
            if(user[0].password != password) {
                return res.status(400).json({message: "Wrong password", userPass: user.password})
            } else {
                let token = jwt.sign({email}, process.env.SECRET_KEY, {expiresIn: '1h'});

                res.status(200).json({message: "User logged!", token});
            }
        }

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router;