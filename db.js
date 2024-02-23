const mongoose = require('mongoose');
require("dotenv").config()
const connectToDB = async () => {
	try {
		await mongoose.connect(process.env.mongoURI)
		console.log('Connected to mongoDB')
        // console.log(mongoose.connection.readyState)
        
	} catch (err) {
		console.error('Error connecting to mongoDB:', err.message)
	}
}
let mongooseConnection =()=>{
    return mongoose.connection.readyState==1?'Connected to mongoDB':'Error connecting to mongoDB:'
}
module.exports = {
	connectToDB,
	mongooseConnection
}