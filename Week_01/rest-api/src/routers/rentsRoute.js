import express from "express";
import rentService from '../services/rentsService.js' 


const router = express.Router();


// rents movies part....................................................

router.get("/", (req,res)=>{
   const rentList = rentService.getRentList();
   res.status(200).send(rentList)
});

router.post("/", (req,res)=>{
    const rent = req.body;
    const newRent = rentService.addRent(rent)
    res.status(201).send(newRent);
     
});


export {router};