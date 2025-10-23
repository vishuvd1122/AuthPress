const express = require("express")
const router = express.Router()
const {addPermission ,getPermissions,deletePermission,updatePermission} = require("../controllers/admin/permissionController")
const {permissionAddValidator,permisssionDeleteValidator,permisssionUpdateValidator} = require("../helpers/adminValidator")
const {onlyAdminAccess} = require("../middlewares/adminMiddleware")
const {verifyToken} = require("../middlewares/authMiddleware")


//add verify token function from authMiddleware if necessary.

router.post("/add-permission",verifyToken,onlyAdminAccess ,permissionAddValidator ,addPermission)
router.get("/get-permissions" ,verifyToken,onlyAdminAccess, getPermissions)
router.post("/delete-permission" ,verifyToken,onlyAdminAccess,permisssionDeleteValidator,deletePermission)
router.post("/update-permission",verifyToken,onlyAdminAccess , permisssionUpdateValidator,updatePermission)


module.exports = router



