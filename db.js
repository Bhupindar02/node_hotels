const mongoose = require("mongoose");

//define mongoDb connection URl
const mongoURL = "mongodb://127.0.0.1:27017/Hotel"
//establishing connections
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//get the default connections
//mongoos maintain a default connections object representing mongo db connections
const db = mongoose.connection;  //with this obj you can handel events and intract with database

//add event listners
db.on('connected',()=>{
    console.log("connections has established")
})

db.on('disconnected',()=>{
    console.log("dis-connected")
})

db.on('error',(error)=>{
    console.log("connection Error:",error)
})


//exports db
module.exports ={
    db
}