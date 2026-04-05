const {Router} = require ("express");
const adminRouter =  Router();
const { adminModel, courseModel} = require ("../db");
const jwt = require ("jsonwebtoken");
const { adminMiddleware } = require("../middleware/admin")


const {JWT_ADMIN_PASSWORD} = require ("../config" );




adminRouter.post("/signup" , async function (req , res) {

    const { email , password , firstName , lastName } = req.body; // Tood : adding zod validations
    //TODO : hash the passowrd so plaintext pw is not stored in the db
    
    //TODO : put inside a try and catch block 
    await adminModel.create ({
        email : email ,
        password : password ,
        firstName : firstName,
        lastName : lastName

    }) 
    res.json({
        message: "signup has done successfully"
    })
    
})

adminRouter.post("/signin" , async function (req , res) {
    const {email , password } = req.body;
    
    //TODO : identically password should be hashed and hence you cant compare the user provided password 
    // and the database password 
    const admin = await adminModel.find({
        email : email,
        password : password 
    })

    if (admin) {
        const token = jwt.sign({
            id:admin._id
        },JWT_ADMIN_PASSWORD);

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

adminRouter.post("/course" , adminMiddleware , async function (req , res) {
    const adminId = req.userId;

    const { title , description , imageUrl ,price } = req.body;
    
    const course = await courseModel.create ({
        title : title ,
        description : description ,
        imageUrl : imageUrl ,
        price: price ,
        creatorId : adminId
    })
    
        res.json ({
        message : "course created",
        courseId : course._id
    })
})

adminRouter.put("/course" , adminMiddleware , async function (req , res) {
    const adminId = req.userId ;
    
    const { title , description , imageUrl , price , courseId, creatorId } = req . body ;
    console.log({title}, {description}, {imageUrl}, {price}, {courseId}, {creatorId})
    


    const course = await courseModel.updateOne ({
        id : courseId ,
        creatorId : creatorId
    } , {
        title : title,
        description : description ,
        imageUrl : imageUrl,
        price :price 
    } )

    console.log("course printed: ", course);
    res.json ({
        message : "Course update ",
        courseId : courseId,
        creaaadlkfjadtorId: creatorId
    })
})

adminRouter.get("/course/bulk" ,adminMiddleware ,async  function (req , res) {
    const adminId = req.userId ;
    
    console.log ("came here")
    
    const course = await courseModel.find({
        creatorId : adminId

    })
    console.log(adminId) 

    console.log("result of bulk" , course)
    res.json ({
        message : "course updated " ,
        courseId : course
    })
})
module.exports = {
    adminRouter : adminRouter
}