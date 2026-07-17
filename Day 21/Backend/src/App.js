const express = require("express")
const userRouter = require("./routes/user.router")
const connectDb = require("./db/db")
const cors = require("cors")
const morgan = require("morgan")
const config = require("./config/config")
require("dotenv").config()


const app = express()
connectDb()

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())  //it's make a redable data 
//app.use(express.urlencoded({extended : true}));

app.use(express.urlencoded({extended : true})); 

app.use((req, res, next)=>{
    console.log("application level middleware....");
    next()
})



app.use("/v1/api/user",userRouter)

module.exports = app