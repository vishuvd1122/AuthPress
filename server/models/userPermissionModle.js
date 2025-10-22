const mongoose = require("mongoose")

const userPermissionSchema = new mongoose.Schema({
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

const userPermissionModel = mongoose.model("UserPermission" , userPermissionSchema)
module.exports = userPermissionModel;


//This permission model with signify all the permissions that a particular user has corrosponding to their ids
