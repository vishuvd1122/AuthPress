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

    var obj = {
      permission_name,
    };
    if (req.body.is_default) {
      obj.is_default = parseInt(req.body.is_default);
    }

    const permission = new Permission(obj);
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

module.exports = { addPermission };
