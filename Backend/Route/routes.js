const express = require('express')
const router = express.Router()
router.get("/getdata",(req,res)=>{
res.json("Get request Success")
})
router.post("/postdata",(req,res)=>{
    try{
        res.json("Post request Success")

    }
    catch(err){
        res.json({"error":err})
    }
    // res.json(req.body)
})
router.put("/putdata",(req,res)=>{
    try{
        res.json("Put request success")

    }
    catch(err){
        res.json({"error":err})
    }
})
router.patch("/patchdata",(req,res)=>{
    try{
        res.json("Patch request success")

    }
    catch(err){
        res.json({"error":err})
    }
})
router.delete("/deletedata",(req,res)=>{
    try{

        res.json("delete request success")
    }    catch(err){
        res.json({"error":err})
    }
})

module.exports= {router}