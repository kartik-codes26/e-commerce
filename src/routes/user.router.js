const express =require("express")
const bcrypt =require("bcrypt")
const router = express.Router()

const userModel=require("../models/user.model")
router.post("/register", async(req,res)=>{
    

    const {username, email,password} =req.body

    try{
            const hashedPass= await bcrypt.hash(password,10)
            console.log(hashedPass);

            const user = new userModel({
                username:username,
                email:email,
                password:hashedPass
            })
            await user.save()
            res.send("register successfullt...")

    }  
    catch(error){
        console.log(error);
        res.status(500).json({message:"internal server error",error :error.message})

    }
    

})

module.exports = router;