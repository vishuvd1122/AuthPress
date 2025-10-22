const express = require("express")
const router = express.Router()
const {addPermission ,getPermissions} = require("../controllers/admin/permissionController")
const {permissionAddValidator} = require("../helpers/adminValidator")


router.post("/add-permission" ,permissionAddValidator ,addPermission)
router.get("/get-permissions" ,getPermissions)


module.exports = router



