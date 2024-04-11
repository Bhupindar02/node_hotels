const express = require("express");
const router = express.Router();

const menu = require("./../models/menu");

router.post("/",async(req,res)=>{
    try{
        const data = req.body;
    
        const newMenu = new menu(data);
        const response = await newMenu.save();
        console.log("data saved");
        res.status(200).json(response);
    }
    catch(error){
        console.log(error);
        res.status(500).json({ error: "internal server error" })
    }
    })
 
 router.get("/",async(req,res)=>{
        try{
            const data = await menu.find();
            console.log("data fetched");
            res.status(200).json(data);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "internal server error" })
        }
    })   
    
    
    router.get("/:taste",async(req,res)=>{
        try{
            const  taste= req.params.taste;
          if(taste=="Sweet"|| taste=="Spicy"|| taste=="Sour"){
             const response = await  menu.find({ taste: taste});
             console.log("response fetched");
             res.status(200).json(response);
          }else{
             res.status(404).json({error:"invalid work type"})  
          }
        }catch(error){
       console.log(error);
       res.status(500).json({error:"Internal server error"})
        }
        
    })


    module.exports = router;