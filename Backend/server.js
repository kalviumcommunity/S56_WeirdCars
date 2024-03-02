const express = require("express")
const {connectToDB, mongooseConnection} = require("./db.js")
const mongoose = require("mongoose")
const UserModel = require("./User.js")
const cors = require("cors")
connectToDB()
const app = express()
app.use(express.json())
app.use(cors())
// const port = 3000
const port = process.env.PUBLIC_PORT || 3000
const {router} = require("./Route/routes.js")

app.get("/getuser",async(req,res)=>{
    try {
        const data = await UserModel.find({});
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


app.get("/ping",(req,res)=>{
    try{
        res.send("pong")    
    }
    catch{
        res.sendStatus(404).send("Error 404 not found")
    }
})
app.get("/",(req,res)=>{
    try{
        res.send(mongooseConnection())
        console.log(mongooseConnection()) 
    }
    catch{
        res.sendStatus(404).send(mongooseConnection())
    }
})
app.use(router)
app.listen(port,()=>{
    console.log(`Server running on port: ${port}`)
})