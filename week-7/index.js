const express = require('express');
const { Usermodel, Todomodel } = require("./db");
const jwt = require("jsonwebtoken");
const { auth, JWT_SECRET } = require("./auth");
const mongoose = require("mongoose");
const bcrypt = require ("bcrypt"); 
// mongoose library let you create schemas 


const app = express();
app.use(express.json()); // used this middle ware for parsing 

const connect = async()=> {
    console.log("connection function")
    try {
    const res = await mongoose.connect("mongodb+srv://sankyy_DB:123%40123@cluster1.3d98cyh.mongodb.net/todos-appsss")
    console.log("connected to db")
    if(res){
        console.log("connectioned...")
    } else{
        console.log("failed connection")
    }
    
} catch (error) {
    console.log("error while connectiong", error);
}
}

connect();



app.post("/signup", async function (req, res) {

    const requiredBody = z.object({
        email: z.String().min(5).max(30).email(),
        password : z.String().min(5).max().password(),
        name : z.String
    })

    const parsedDataWithSuccess = requiredBody.safeParse(req.body);
    if (!parsedDataWithSuccess.success) {
        res.json ({
            msg : "incorrect format",
            error : parsedDataWithSuccess.error
        })
        return
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    if(!email.isString() || !email.contains('@') ) {
                res.json({
                    msg : "wrong email"
                })
                return
            } 

    const hashedPassword = await bcrypt.hash(password, 5);
    console.log (hashedPassword);

    console.log({email}, {password}, {name})

    try {
        //input validations
        const res = await Usermodel.create({
            email: email,
            password : password,
            name: name
            
            
        });
        console.log("user saving response: ", res);
        
    } catch (error) {
        console.log("error while registerign user: ", error);
        res.status(500).send("something went wrong")
    }
    
    res.json({
        msg: " you have registered successfully"
    })
    
});

app.post("/signin", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    console.log("email: ", email, {password});


    const user = await Usermodel.findOne({
        email: email,
        password: password

    })
    console.log("user", user);

    if (user) {
        const token = jwt.sign({
            // payload means which data is to be stored
            id: user._id.toString()
        }, JWT_SECRET);
        res.json({
            token: token
        });
    } else {
        res.status(403).json({
            message: "wrong creadiantials"

        })
    }

});


app.post("/todo", auth, async function (req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await Todomodel.create({
        userId,
        title,
        done
    })
    res.json({
        message: "todo has created"
    })

});


app.get("/todos", auth, async function (req, res) {
    const userId = req.userId;

    const todos = await Todomodel.find({
        userId
    })

    res.json({
        userId
    })


});


app.listen(3000, () => {
    console.log("serv3er started on 300o")
});







/// using salt for more privacy

// bcrypt

