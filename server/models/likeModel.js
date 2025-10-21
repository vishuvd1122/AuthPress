const mongoose = require("mongoose")

const likeSchema = new mongoose.Schema({
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

const likeModel = mongoose.model("Like" , likeSchema)
module.exports = likeModel;