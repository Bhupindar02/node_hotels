const mongoose = require("mongoose");

//creating model or schema
const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    taste: {
        type: String,
        enum: ['Sweet', 'Spicy', 'Sour'],
    },
    is_drink: {
        type: Boolean,
        default: false,
    },
    ingredients: {
        type: [String],
        default: [],
    },
    num_sales: {
        type: Number,
        default: 0,
    }


})

//create menue module

const menu = mongoose.model("menu",menuSchema);

module.exports= menu;



