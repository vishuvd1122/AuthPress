const express = require("express")
const router = express.Router()
const {registerUser,loginUser} = require("../controllers/authController")
const {registerValidation,passwordValidation,loginValidation} = require("../helpers/validator")


router.post("/register" , registerValidation,passwordValidation ,registerUser)
router.post("/login", loginValidation,loginUser)


module.exports = router



