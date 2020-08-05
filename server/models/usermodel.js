const mongoose = require('mongoose')
// const {ObjectId} = mongoose.Schema.Types
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    token:String,
    expiretoken:Date
    // pic:{
    //  type:String,
    //  default:"https://res.cloudinary.com/cnq/image/upload/v1586197723/noimage_d4ipmd.png"
    // }
 
})

mongoose.model("User",userSchema)