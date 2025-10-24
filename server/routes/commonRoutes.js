const express = require("express");
const router = express.Router();

const {
  addCategoryVaidator,
  updateCategoryValidator,
  addPostValidator,
  deletePostValidator,
  updatePostValidator
} = require("../helpers/adminValidator");
const {
  addCategory,
  getCategories,
  deleteCategory,
  updateCatagory,
  addPost,
  getAllPosts,
  deletePost,
  updatePost
} = require("../controllers/commonController");

const { verifyToken } = require("../middlewares/authMiddleware");

//Category Routes

router.post("/add-category", verifyToken, addCategoryVaidator, addCategory);
router.get("/get-categories", verifyToken, getCategories);
router.post("/delete-category", verifyToken, deleteCategory);
router.post(
  "/update-category",
  verifyToken,
  updateCategoryValidator,
  updateCatagory
);

//Post routes

router.post("/add-post", verifyToken, addPostValidator, addPost);
router.get("/get-posts", verifyToken, getAllPosts);
router.post("/delete-post", verifyToken, deletePostValidator, deletePost);
router.post("/update-post", verifyToken, updatePostValidator, updatePost);

module.exports = router;
