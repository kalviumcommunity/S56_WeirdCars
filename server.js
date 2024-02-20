const express = require("express")
const app = express()
// const port = 3000
const port = process.env.PUBLIC_PORT || 3000

app.get("/ping",(req,res)=>{
    res.send("pong")
})
app.get("/",(req,res)=>{
    res.send("HOME PAGE")
})
app.listen(port,()=>{
    console.log(`Server running on port: ${port}`)
})