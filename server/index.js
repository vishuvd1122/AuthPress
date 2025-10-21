const express = require("express")
require("dotenv").config();
const PORT = process.env.PORT
require("./models/db")
const bodyParser = require("body-parser")
const app = express()
const authRouter = require("./routes/authRouter")



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))





// Routes
app.get("/test", (req, res) => {
    res.send("TEST ROUTE - Server is working!")
})

app.use("/auth" ,authRouter);




app.listen(PORT ,()=>{
    console.log(`App is listening to port ${PORT}`);
    
} )

