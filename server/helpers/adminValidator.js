const permissionAddValidator = (req,res,next)=>{

  const {permission_name} = req.body

  if(!permission_name){
    return res.status(500).json({
      success :false,
      message : "permission_name is required"
    })
  }
  next()

}


const permisssionDeleteValidator = (req, res, next) => {
  const { _id } = req.body;
  // console.log(_id);

  if (!_id) {
    return res.status(400).json({
      success: false,
      message: "id is required!"
    });
  }
  next();
}



const permisssionUpdateValidator = (req,res,next)=>{
   const { _id, permission_name} = req.body;
  

  if (! _id || !permission_name) {
    return res.status(400).json({
      success: false,
      message: "id and permission_name are required!"
    });
  }
  next();
}

module.exports = {permissionAddValidator,permisssionDeleteValidator,permisssionUpdateValidator}