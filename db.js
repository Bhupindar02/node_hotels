const mongoose = require("mongoose");
require("dotenv").config();
//define mongoDb connection URl
 const mongoURL = process.env.LOCALDB_URL                 //for local db
// const mongoURL = process.env.DB_URL;

//establishing connections
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//get the default connections
//mongoos maintain a default connections object representing mongo db connections
const db = mongoose.connection;  //with this obj you can handel events and intract with database

//add event listners
db.on('connected', () => {
    console.log("connections has established")
})

db.on('disconnected', () => {
    console.log("dis-connected")
})

db.on('error', (error) => {
    console.log("connection Error:", error)
})


//exports db
module.exports = {
    db
}