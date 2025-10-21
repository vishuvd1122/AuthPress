const express = require("express")
require("dotenv").config();
const PORT = process.env.PORT
require("./models/db")

const app = express()

app.use("/" , ((req,res)=>{
    res.send("This is the / route")
}));

app.listen(PORT ,()=>{
    console.log(`App is listening to port ${PORT}`);
    
} )

