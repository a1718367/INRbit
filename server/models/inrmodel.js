const mongoose = require('mongoose')
// const {ObjectId} = mongoose.Schema.Types
const inrSchema = new mongoose.Schema({
    inr:{
        type:Number,
        required:true
    },
    dose:{
        type:Number,
        require:true
    },
    date:{
        type:Date
        
    },
    userid:{
        type:String,
        required:true
    },
})

const inr = mongoose.model("INR",inrSchema)
module.exports = inr