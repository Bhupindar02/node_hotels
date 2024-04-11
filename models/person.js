const mongoose = require("mongoose");
//create models or schema
const personSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
    },
    work:{
        type:String,
        enum:["chef","waiter","manager"],
        required:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    adress:{
        type:String,

    },
    salary:{
        type:Number,
        required:true
    }
})

//creat personal model
const person = mongoose.model("person",personSchema);

module.exports = person