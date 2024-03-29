const express = require('express')
const router = express.Router()
const {UserModel,UserDetail} = require("../User.js")

router.get("/userinfo",async(req,res)=>{
    try {
        const data = await UserDetail.find({});
        res.json(data);
    } catch (err) {
        // console.error(error);
        res.status(500).json({ error: err });
    }
})
router.post("/addUser",(req, res) => {

        UserDetail.create(req.body).then((el) => res.json(el))
        .catch(err => res.json(err));
});
router.get("/getdata",(req,res)=>{
res.json("Get request Success")
})
// router.post("/postdata",(req,res)=>{
//     try{
//         res.json("Post request Success")

//     }
//     catch(err){
//         res.json({"error":err})
//     }
//     // res.json(req.body)
// })

// app.post("/createdata", (req, res) => {
//     UserModel.create(req.body).then((el) => res.json(el))
//     .catch(err => res.json(err));
// });
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