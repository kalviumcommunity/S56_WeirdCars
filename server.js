const express = require("express")
const app = express()
// const port = 3000
const port = process.env.PUBLIC_PORT || 3000

app.get("/ping",(req,res)=>{
    try{
        res.send("pong")

    }
    catch{
        res.status(404).send("Error 404 not found")
    }
})
app.get("/",(req,res)=>{
    try{
        res.send("Home Page")

    }
    catch{
        res.status(404).send("Error 404 not found")
    }
})
app.listen(port,()=>{
    console.log(`Server running on port: ${port}`)
})