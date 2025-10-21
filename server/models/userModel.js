const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required :true,
    },
    email:{
        type:String,
        required :true,
    },
    password:{
        type:String,
        required :true,
    },
    role:{
        type:Number,
        default:0,
        // User -->0
        // Editor -->1
        // Sub-admin -->2
        // Admin -->3
    },
})

const userModel = mongoose.model("User" , userSchema)
module.exports = userModel;