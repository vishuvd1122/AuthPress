const express = require("express")
const router = express.Router()
const {addPermission ,getPermissions,deletePermission,updatePermission} = require("../controllers/admin/permissionController")
const {addCategoryVaidator} = require("../helpers/adminValidator")
const {addCategory ,getCategories,deleteCategory} = require("../controllers/commonController")

const {verifyToken} = require("../middlewares/authMiddleware")


//Category Routes

router.post("/add-category",verifyToken,addCategoryVaidator,addCategory)
router.get("/get-categories",verifyToken,getCategories)
router.get("/delete-category",verifyToken,deleteCategory)



module.exports = router



