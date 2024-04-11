let express = require("express");
let app = express();
const Port = 3000;
var bodyParser = require('body-parser');
require("dotenv").config();

app.use(bodyParser.json())//request.body

const db = require("./db");

const menu = require("./models/menu");

app.get("/", function (req, res) {
    res.send("How can I help you")
});






const personRout = require("./routs/personRout")
const menuRout = require("./routs/menuRout")

// use the router
app.use("/person", personRout);
app.use("/menu", menuRout);



const PORT = process.env.PORT||3000;



app.listen(PORT, () => console.log("app is listiong"))



/*app.post("/person", async (req, res) => {
    try {
        const data = req.body;//assuning the req.body contains  person data

        //creating a new person document using mongoose model
        const newPerson = new person(data);
        //save new person to the dataBase
        const response = await newPerson.save();
        console.log("data saved");
        res.status(200).json(response);
        // newPerson.name = data.name
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "internal server error" })
    }

})*/

/*
app.get("/chiken",  function(req,res){
    res.send("Sure I would love to searve chicken")
})

app.get("/paneer",   (req,res)=>{
    res.send("Sure")
})

app.get("/Idli",   (req,res)=>{
    let customizedIdli = {
        siz:"Large",
        isSamber:true,
        isRaita:false,
        isSous:false
    }
    res.send("Here is your "+customizedIdli)
})
app.post("/Items", (req, res) => {
    console.log("datahas been sent")
    res.send("DAta is Send");
})*/