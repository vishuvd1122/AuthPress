const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required :true,
    },
    description:{
        type:String,
        required :true,
    },
    categories :{
        type:Array,
        required:false
    }
})

const postModel = mongoose.model("Post" , postSchema)
module.exports = postModel;