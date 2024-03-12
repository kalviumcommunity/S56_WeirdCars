const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:String,
    year:String,
    description: String,
    feature: String,
    image:String
})
const UserDetails = new mongoose.Schema({
    username: String
})
const Usermodel = mongoose.model("weirdcar-colls", UserSchema)
const UserDetail = mongoose.model("user_details",UserDetails)
module.exports = {Usermodel,UserDetail}

