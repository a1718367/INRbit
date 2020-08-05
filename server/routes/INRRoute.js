const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const INR = require('../models/inrmodel')

//INR

router.post('/add', (req,res) => {
    const {inr, date, userid } = req.body
    INR.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
});

router.get("/data/user/:id", (req,res) => {
    INR.find({userid: req.params.id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.delete("/data/:id", (req,res)=>{
    INR.findOneAndRemove(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})


module.exports = router