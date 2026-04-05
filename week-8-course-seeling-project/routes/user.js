const { Router } = require("express");
const {userModel} = require("../db");
const jwt = require("jsonwebtoken");
 // user ka password and admin ka password to login will 
//different
const { JWT_USER_PASSWORD} = require ("../config");

const userRouter = Router();






userRouter.post("/signup",  async function (req, res) {
    const { email , password , firstName , lastName } = req.body; // Tood : adding zod validations
    //TODO : hash the passowrd so plaintext pw is not stored in the db
    
    //TODO : put inside a try and catch block 
    await userModel.create ({
        email : email ,
        password : password ,
        firstName : firstName,
        lastName : lastName

    }) 
    res.json({
        message: "signup has done successfully"
    })
})

userRouter.post("/signin", async  function (req, res) {
    const {email , password } = req.body;
    
    //TODO : identically password should be hashed and hence you cant compare the user provided password 
    // and the database password 
    const user = await userModel.find({
        email : email,
        password : password 
    })

    if (user) {
        const token = jwt.sign({
            id:user._id
        },JWT_USER_PASSWORD);

        //do cookie logic 
        res.json ({
            token : token 
        })
    }else{
        res.status(403).json ({
            message : "incorrect creadentials"
        })
    } 
    
})

userRouter.post("/purchases", function (req, res) {
    res.json({
        message: "signup endpoint"
    })
})


module.exports = {
    userRouter : userRouter
}