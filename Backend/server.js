const express = require("express")
const {connectToDB, mongooseConnection} = require("./db.js")
const UserModel = require("./User.js")
const cors = require("cors")
connectToDB()
const app = express()
app.use(express.json())

// const port = 3000
const port = process.env.PUBLIC_PORT || 3000
const {router} = require("./Route/routes.js")

app.use(cors())

app.get("/getuser",async (req,res)=>{
    try {
        const data = await UserModel.find({});
        res.json(data);
    } catch (err) {
        // console.error(error);
        res.status(500).json({ error: err });
    }
})

app.post("/createdata",(req, res) => {
    UserModel.create(req.body).then((el) => res.json(el))
    .catch(err => res.json(err));
});


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