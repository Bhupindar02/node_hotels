const express = require('express');
const router = express.Router();
const person = require("./../models/person");
//post rout for /person
router.post("/", async (req, res) => {
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

})
//get rout for person

router.get("/",async(req,res)=>{
    try{
        const data = await person.find();
        console.log("data fetched");
        res.status(200).json(data);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "internal server error" })
    }
})

//to get person according to there work(by using parameterised url)
router.get("/:workType",async(req,res)=>{
    try{
        const workType= req.params.workType;
      if(workType=="chef"||workType=="waiter"||workType=="manager"){
         const response = await person.find({work:workType});
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


router.put("/:ID",async(req,res)=>{
    try{
       const personId = req.params.ID;
       const updatedPersonData = req.body;
       const response = await person.findByIdAndUpdate(personId,updatedPersonData,{
        new:true,
        runValidators:true,
       })

       if (!response) {   //if there is no person data on that id  
        return res.status(404).json({ error: 'Person not found' });
        }

       console.log("data updated");
       res.status(200).json(response);
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:"Internal server error"})
    }
})

    router.delete("/:ID",async(req,res)=>{
        try{const personId = req.params.ID;

        const response = await person.findByIdAndDelete(personId);

        if (!response) {   //if there is no person data on that id  
            return res.status(404).json({ error: 'Person not found' });
            }
        console.log("data deleted");
        res.status(200).json({message:"person deleted sucessfully"})
        }
        catch(error){
            console.log(error);
            res.status(500).json({error:"Internal server error"})
        }

    })

module.exports = router;