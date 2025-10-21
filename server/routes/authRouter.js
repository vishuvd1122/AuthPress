const express = require("express")
const router = express.Router()
const {registerUser} = require("../controllers/authController")
const {registerValidation,passwordValidation} = require("../helpers/validator")


router.post("/register" , registerValidation,passwordValidation ,registerUser)


module.exports = router



