const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    description: String,
    feature: String,
    image:String,
    name:String,
    year:String
})
const Usermodel = mongoose.model("weirdcar-colls", UserSchema)

module.exports = Usermodel

