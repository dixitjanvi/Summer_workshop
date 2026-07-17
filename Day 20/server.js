// const http = require("http")

// const server = http.createServer((req,res)=>{
//     if(req.url === '/'){
//         res.end("Home Page")
//     }

//     if(req.url === "/about"){
//         res.end("About page")
//     }
// })

// server.listen(5050)

const express = require("express")
const app = express()
const route = express.Router()

app.get("/",(req,res)=>{
    res.send("home page")
})

app.get("/about",(req,res)=>{
    res.send("about page")
})

app.get("/contant",(req,res)=>{
    res.send("contact page")
})

app.listen(3000, ()=>{
    console.log("server started.....");
    
})