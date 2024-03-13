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
const UserModel = mongoose.model("weirdcars-colls", UserSchema)
const UserDetail = mongoose.model("user_details",UserDetails)
module.exports = {UserModel,UserDetail}

