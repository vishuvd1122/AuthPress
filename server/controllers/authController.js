const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const User = require("../models/userModel");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      return res.status(400).json({
        success: false,
        message: "User already exist ",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    const userData = await user.save();

    return res.status(201).json({
      success: true,
      message: "User registered successfully!!!",
      data: userData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const generateAccessToken = (user)=>{
    const token = JWT.sign(user , process.env.SECRET_KEY, {expiresIn:"2h"})
    return token;
}




const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(501).json({
        success: false,
        message: "Incorrect Email or password",
      });
    }

    //JWT signing

    const isPassCorrect = await bcrypt.compare(password , user.password)
    if(!isPassCorrect){
        return res.status(500).json({
            success: false,
            message :"Incorrect Email or password "
        })
    }

    const accessToken = generateAccessToken({
        id: user._id,
        email: user.email,
        name:user.name,
        password:user.password,
        role:user.role
    })
    console.log();
    


    return res.status(200).json({
        status:true,
        message:"Login Successfull",
        userData: user,
        accessToken : accessToken,
        tokenType:"Bearer"
        
    })



  } catch (error) {
    return res.status(500).json({
        success : false,
        message: error.message
    })
  }
};




const getUserProfile = async (req,res)=>{


  try {
   return res.status(200).json({
      success : true,
      message : "Profile Data",
      data : req.user
    })
    
  } catch (error) {
    return res.status(500).json({
      success : false,
      message : Error.message
    })
  }

}

module.exports = { registerUser, loginUser,getUserProfile };
