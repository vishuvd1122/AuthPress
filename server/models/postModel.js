const mongoose = require("mongoose");
const Category = require("./categoryModel");

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required :true,
    },
    description:{
        type:String,
        required :true,
    },
    categories :[{
        type:mongoose.Schema.Types.ObjectId,
        ref:Category,
        required:false
    }]
})

const postModel = mongoose.model("Post" , postSchema)
module.exports = postModel;