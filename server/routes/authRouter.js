const express = require("express")
const router = express.Router()
const {registerUser,loginUser,getUserProfile} = require("../controllers/authController")
const {registerValidation,passwordValidation,loginValidation} = require("../helpers/validator")
const {verifyToken} = require ("../middlewares/authMiddleware")


router.post("/register" , registerValidation,passwordValidation ,registerUser)
router.post("/login", loginValidation,loginUser)

router.get("/profile",verifyToken ,getUserProfile )


module.exports = router



