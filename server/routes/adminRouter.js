const express = require("express")
const router = express.Router()
const {addPermission } = require("../controllers/admin/permissionController")
const {permissionAddValidator} = require("../helpers/adminValidator")


router.post("/add-permission" ,permissionAddValidator ,addPermission)


module.exports = router



