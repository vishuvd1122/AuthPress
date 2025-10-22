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

module.exports = {permissionAddValidator}