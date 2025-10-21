const passwordvalidator = require("password-validator");
const Joi = require("joi");

const registerValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    password: Joi.string().min(3).max(10).required(),
    email: Joi.string().email().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: "Bad Request ",
      error,
    });
  }
  next();
};

const passwordValidation = (req, res, next) => {
  const { password } = req.body;
  const schema = new passwordvalidator();
  
  schema
    .is().min(5)                     // Minimum length 8
    .is().max(100)                   // Maximum length 100
    .has().uppercase()               // Must have uppercase letters
    .has().lowercase()               // Must have lowercase letters
    .has().digits(2)                 // Must have at least 2 digits
    .has().not().spaces()         // Should not have spaces
    .has().symbols(1);

  const passStrength = schema.validate(password , {details :true});
  const isPassStrong = schema.validate(password); 
//   console.log(passStrength);

  if(!isPassStrong){
    return res.status(400).json({
        status:false,
        message:passStrength[0].message
    })
  }

  next();
};

module.exports = { registerValidation, passwordValidation };
