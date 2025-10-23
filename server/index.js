const express = require("express")
require("dotenv").config();
const PORT = process.env.PORT
require("./models/db")
const app = express()

// Body parser middleware - MUST be before routes
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Import routers AFTER middleware setup
const authRouter = require("./routes/authRouter")
const adminRouter = require("./routes/adminRouter")
const commonRouter = require("./routes/commonRoutes")





// Routes
app.get("/test", (req, res) => {
    res.send("TEST ROUTE - Server is working!")
})

app.use("/auth" ,authRouter);
app.use("/auth" ,commonRouter);
app.use("/admin" , adminRouter)





app.listen(PORT ,()=>{
    console.log(`App is listening to port ${PORT}`);
    
} )

