const mongoose = require("mongoose");

const mongoUrl = process.env.MONGO_URL

mongoose.connect(mongoUrl) 
.then(()=>{
    console.log("Database connection successfull");
}).catch((err)=>{
    console.log("ERROR:", err);

})