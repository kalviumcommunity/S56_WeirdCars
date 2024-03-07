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
app.get("/getdata/:id",(req,res)=>{
    const id= req.params.id;
    UserModel.findById({_id:id})
    .then((el) => res.json(el))
    .catch(err => res.json(err));
})

app.put("/updatedata/:id",(req,res)=>{
    const id= req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{name:req.body.name,year:req.body.year,description:req.body.description,feature:req.body.feature,image:req.body.image})
    .then((el) => res.json(el))
    .catch(err => res.json(err));
})

app.post("/createdata",(req, res) => {
    UserModel.create(req.body).then((el) => res.json(el))
    .catch(err => res.json(err));
});

app.delete("/deleteUser/:id",(req,res)=>{
    const id= req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))
    .catch(err => res.json(err))
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