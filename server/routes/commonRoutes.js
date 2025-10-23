const express = require("express")
const router = express.Router()
const {addPermission ,getPermissions,deletePermission,updatePermission} = require("../controllers/admin/permissionController")
const {addCategoryVaidator,updateCategoryValidator,addPostValidator} = require("../helpers/adminValidator")
const {addCategory ,getCategories,deleteCategory,updateCatagory,addPost,getAllPosts} = require("../controllers/commonController")

const {verifyToken} = require("../middlewares/authMiddleware")


//Category Routes

router.post("/add-category",verifyToken,addCategoryVaidator,addCategory)
router.get("/get-categories",verifyToken,getCategories)
router.get("/delete-category",verifyToken,deleteCategory)
router.post("/update-category",verifyToken,updateCategoryValidator,updateCatagory)



//Post routes

router.post("/add-post", verifyToken,addPostValidator,addPost)
router.get("/get-posts", verifyToken,getAllPosts)


module.exports = router



