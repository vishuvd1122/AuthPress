const mongoose = require("mongoose")

const permissionSchema = new mongoose.Schema({
    
    
    permission_name:{
        type:String,
        required:true
    },
    is_default:{
        type:Number,
        default : 0 
    }

    //Permissions with is_default:1 will be alloted to all the users from the start automatically 
    
})

const permissionModel = mongoose.model("Permission" , permissionSchema)
module.exports = permissionModel;