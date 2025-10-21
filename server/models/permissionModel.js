const mongoose = require("mongoose")

const permissionSchema = new mongoose.Schema({
    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref :"User",
    },
    permissions :[{
        permission_name:String,
        // User,Comment,Like,Post
        permission_value:[Number],
        // 0-->Create
        // 1-->Read
        // 2-->Update 
        // 3-->Delete       
    }]
})

const permissionModel = mongoose.model("Permission" , permissionSchema)
module.exports = permissionModel;