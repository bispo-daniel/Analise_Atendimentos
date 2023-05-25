const express = require('express');
const router = express.Router();
const UserModel = require('../models/UserModel');

router.post('/', async (req, res) => {
    try {
        const user = await UserModel.find({email : req.body.email});
        
        if(!user[0]) {
            return res.status(404).json({message: "user not found..."})
        } else {
            if(user[0].password != req.body.password) {
                return res.status(400).json({message: "Wrong password", userPass: user.password})
            } else {
                res.status(200).json({message: "User logged!"});
                console.log(req.body.email + " logged..");
            }
        }

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router;