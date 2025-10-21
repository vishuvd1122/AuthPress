const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
    comment:{
        type:String,
        required:true
    },

    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref :"User",
    },
    post_id : {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref :"Post",
    },

})

const commentModel = mongoose.model("Comment" , commentSchema)
module.exports = commentModel;