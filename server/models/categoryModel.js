const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    category_name:{
        type:String,
        required :true,
    },
})

const categoryModel = mongoose.model("Category" , categorySchema)
module.exports = categoryModel;


//every post will have its own category describing it