const { date } = require("joi");
const Category = require("../models/categoryModel");

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
  try {
    const { _id } = req.user;
    console.log(_id);

    const category = await Category.findOne({ _id });
    console.log(category);

    if (!category) {
      return res.status(500).json({
        success: false,
        message: "Category not found",
      });
    }
    const deleted = await Category.deleteOne({ _id });
    // console.log(deleted);
    return res.status(200).json({
      success: true,
      message: "category deleted success",
      data: deleted,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Can not get categories",
    });
  }
};

module.exports = { addCategory, getCategories, deleteCategory };
