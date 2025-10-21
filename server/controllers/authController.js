const bcrypt=  require ("bcrypt")
const User = require("../models/userModel")

const registerUser = async(req,res)=>{
    const {name , email , password} = req.body;
    try {
        const isUserExist = await User.findOne({email})
        if(isUserExist){
            return res.status(400).json({
                success :false,
                message :"User already exist "
            })
        }

        const hashedPassword = await bcrypt.hash(password , 10);
        const user = new User({
            name,
            email,
            password : hashedPassword
        })

        const userData = await user.save()

        return res.status(201).json({
            success :true,
            message :"User registered successfully!!!",
            data :userData
        })




    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message 
        })
        
    }
}



module.exports = {registerUser}