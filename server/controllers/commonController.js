const { date } = require("joi");
const Category = require("../models/categoryModel");
const Post = require("../models/postModel");

const addCategory = async (req, res) => {
  try {
    const { category_name } = req.body;

    const isExists = await Category.findOne({ category_name });
    if (isExists) {
      return res.status(400).json({
        success: false,
        message: "Category already exist ",
      });
    }
    const category = new Category({ category_name });
    const newCategory = await category.save();

    return res.status(200).json({
      success: true,
      message: "Category added successfully",
      data: newCategory,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Category already exist ",
    });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    return res.status(200).json({
      success: true,
      message: "All categories",
      data: categories,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "Can not get categories",
    });
  }
};

const deleteCategory = async (req, res) => {
  //not working properly (DEBUG needed)
  try {
    const { category_name } = req.body;
    // console.log(category_name);
    const isExists = await Category.findOne({ category_name });

    if (!isExists) {
      return res.status(500).json({
        success: false,
        message: "Category not found",
      });
    }

    const deleted = await Category.findByIdAndDelete(isExists._id);

    return res.status(200).json({
      success: true,
      message: "Category deleted",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Can not delete category",
    });
  }
};


const updateCatagory = (req,res)=>{
  
}



const addPost =async(req,res)=>{

  try {

    const {title , description } = req.body

    const obj = {
      title,
      description
    }

    if(req.body.categories){
      obj.categories = req.body.categories
    }

    const newPost = new Post(obj)
    const postData = await newPost.save()
    

    const postFullData = await Post.findOne({_id:postData._id}).populate("categories")

    return res.status(200).json({
    success:true,
    message:"Post saved successful!",
    data : postFullData
  })
  } catch (error) {
      return res.status(500).json({
    success:false,
    message:"error adding post"
  })
    
  }
}


const getAllPosts = async(req,res)=>{
  
  try {
    const postsData = await Post.find({}).populate("categories")
    return res.status(200).json({
      success:true,
      message:"Posts Fetched",
      data:postsData
    })

  }  catch (error) {
      return res.status(500).json({
    success:false,
    message:"error getting posts"
  })

}}

module.exports = { addCategory, getCategories, deleteCategory ,updateCatagory,addPost,getAllPosts};
