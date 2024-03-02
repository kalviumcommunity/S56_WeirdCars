const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:String,
    year:String,
    description: String,
    feature: String,
    image:String
})
const Usermodel = mongoose.model("weirdcar-colls", UserSchema)

module.exports = Usermodel

