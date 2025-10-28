//Aqui estaran a las rutas de los usuarios
// router es un modulo nativo dedicado de express , con este import solo llamamos al archivo "router"
import {Router} from "express";

import userModel from "../models/user.model.js";

const router = Router()


//get 
router.get ('/',async (req,res) =>{
    const users= await userModel.find()
    res.status(200).json({message: "todos los usuarios",  })
}); 

//post
router.post("/",async (req,res)=>{
    const {name , last_name, email} =req.body;
    const newUser = await userModel.create( {name, last_name, email});
    res.status (201).json( { message : "un usuario", payload: newUser})}
)


export default router