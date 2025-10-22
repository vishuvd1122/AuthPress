const express = require("express")
const router = express.Router()
const {addPermission ,getPermissions,deletePermission,updatePermission} = require("../controllers/admin/permissionController")
const {permissionAddValidator,permisssionDeleteValidator,permisssionUpdateValidator} = require("../helpers/adminValidator")


//add verify token function from authMiddleware if necessary.

router.post("/add-permission" ,permissionAddValidator ,addPermission)
router.get("/get-permissions" ,getPermissions)
router.post("/delete-permission" ,permisssionDeleteValidator,deletePermission)
router.post("/update-permission" , permisssionUpdateValidator,updatePermission)


module.exports = router



