import { Router } from "express";
import zod from "zod";
import { User } from "../db.js";
import jwt from "jsonwebtoken";
import { JWT_Secretkey } from "../config.js";

const user = Router();
const signupBody = zod.object({
    username : zod.string().email(),
    password : zod.string(),
    firstname : zod.string(),
    lastname : zod.string()
})


user.post("/signup",async (req,res)=>{

    const {success } = signupBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message : "inputs incorrect"
        })
    }

    const existinguser = await User.findOne({username : req.body.username});
    if(existinguser){
        return res.status(411).json({
            message : "user already present"
        })
    }

    const user = await User.create({
        username : req.body.username,
        password : req.body.password,
        firstname : req.body.firstname,
        lastname : req.body.lastname
    })

    const userid = user._id;
    const token = jwt.sign({userid},JWT_Secretkey);

    res.json({
        message : "user successfully created",
        token : token
    })

})


export default user;

