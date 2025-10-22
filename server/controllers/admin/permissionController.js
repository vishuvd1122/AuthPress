const Permission = require("../../models/permissionModel");

const addPermission = async (req, res) => {
  //This api will be used by admin to manage what permissions will be grantedto a new user by default.(Maybe)
  try {
    const { permission_name } = req.body;
    const isExists = await Permission.findOne({ permission_name });
    if (isExists) {
        return res.status(500).json({
        success: false,
        message: "Permisssion already exists",
      });
    }

    var updatedPermission = {
      permission_name,
    };
    if (req.body.is_default != null) {
      updatedPermission.is_default = parseInt(req.body.is_default);
    }

    const permission = new Permission(updatedPermission);
    const newpermission = await permission.save();

    return res.status(200).json({
      success: true,
      message: "Permisssion added successfully",
      data: newpermission,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



const getPermissions =async(req,res)=>{
  try {
    const permissions =await Permission.find({})
    return res.status(200).json({
      status:true,
      message:"Permissions fetched!",
      permissions:permissions
    })
  } 
  catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}



const deletePermission = async(req,res)=>{
   
    try {
       const {_id} = req.body
    const permission = await Permission.findByIdAndDelete({_id})
    return res.status(200).json({
      success :true,
      message : "Permission deleted success!"
    })

    } 
      catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
   
}


const updatePermission =async (req,res)=>{
try {
    const { _id ,permission_name } = req.body;
    const isExists = await Permission.findOne({ _id });
    if (!isExists) {
        return res.status(500).json({
        success: false,
        message: "Permisssion id not found",
      });
    }
    const isNameExists = await Permission.find({ 
      _id: { $ne: _id },
      permission_name
    });
    if (isNameExists && isNameExists.length > 0) {
        return res.status(500).json({
        success: false,
        message: "Permisssion name must be unique!",
      });
    }

    var updatedPermission = {
      permission_name,
    };
    if (req.body.is_default) {
      updatedPermission.is_default = parseInt(req.body.is_default);
    }

    const updated  = await Permission.findByIdAndUpdate({_id},{
      $set :updatedPermission
    },{new:true})

    return res.status(200).json({
      success: true,
      message: "Permisssion updated successfully",
      data: updated,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = { addPermission ,getPermissions,deletePermission,updatePermission};
