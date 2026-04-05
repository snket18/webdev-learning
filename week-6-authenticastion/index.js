const express = require ("express");
const jwt = require('jsonwebtoken');
const JWT_SECRET = "randomsanket"
const app = express();
app.use (express.json());

const user = [];

app.post ("/signup", function (req,res) {

       
    const username = req.body.username;
    const password = req.body.password;

    user.push({
        username : username,
        password : password
    })

    res.json ({
        msg : " you have signed up"
    })

    console.log(user) 
})

app.post("/signin", function (req,res) {

    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;
    
    for (let i=0; i < user.length ; i++) {
        if ( user[i].username === username && user[i].password=== password)
          foundUser = user[i] 
    }

    if (!foundUser) {
        res.json ({
            msg : "invalid creadentials"
        })
        return
    } else {
        const token = jwt.sign({
         username, password
        },JWT_SECRET );

        res.json({
            token : token
        })

    }
    console.log(user)
    
})

app.get("/me", function (req,res) {

    const token  = req.headers.token;

    const decodedData = jwt.verify(token,JWT_SECRET);
    
    if (decodedData.username) {
    let foundUser = null;
    

    const username = decodedData.username;
    const password = decodedData.password;

    console.log({username}, {password});
    

    res.json({
        username: decodedData.username,
        password: decodedData.password
    })

    console.log("this code did not ran.")
    // for (let i=0 ; i < user.length; i++){
    //     if (user[i].username == decodedData.username) {
    //        foundUser = user[i]
    //     }
    // }
    // if (foundUser) {
    // res.json({
    //    username : foundUser.username,
    //    passwword : foundUser.password 
    // })
    // } else {
    //     res.json ({
    //         msg : "token invalid"
    //     })
    // }

}


})

app.listen(3000);

// ---------------------------------------- chat gpt code -----------------------------
// const express = require("express");
// const jwt = require("jsonwebtoken");

// const JWT_SECRET = "randomsanket";
// const app = express();
// app.use(express.json());

// const users = [];

// function auth (req,res,next) {
//     const token = req.headers.token;
//     const decodedData = jwt.verify (token,JWT_SECRET);

//     if (decodedData.username) {
//         req.username = decodedData.username;
//         next()
//     } else {
//         res.json ({
//             msg : "you are not logged in"
//         })
//     }
// }
// // SIGNUP
// app.post("/signup",auth , function (req, res) {
//     const { username, password } = req.body;

//     users.push({ username, password });

//     res.json({
//         msg: "You have signed up"
//     });

//     console.log(users);
// });

// function logger (req,res,next) {
//     console.log(req.method + "request camne");
//     next();
    
// }

// app.get("/", function(req, res) {
//     res.sendFile(__dirname + "./public/index.html")
// })

// // SIGNIN
// app.post("/signin", auth ,function (req, res) {
//     const { username, password } = req.body;

//     let foundUser = null;

//     for (let i = 0; i < users.length; i++) {
//         if (users[i].username === username && users[i].password === password) {
//             foundUser = users[i];
//         }
//     }

//     if (!foundUser) {
//         return res.json({
//             msg: "Invalid credentials"
//         });
//     }

//     const token = jwt.sign({ username }, JWT_SECRET);

//     res.json({
//         token: token
//     });

//     console.log(users);
// });

// // GET USER DATA USING TOKEN
// app.get("/me",auth, function (req, res) {
//     const currentUser = req.username;

//     const token = req.headers.token;

//     try {
//         const decodedData = jwt.verify(token, JWT_SECRET);

//         const username = decodedData.username;

//         let foundUser = null;

//         for (let i = 0; i < users.length; i++) {
//             if (users[i].username === username) {
//                 foundUser = users[i];
//             }
//         }

//         if (!foundUser) {
//             return res.json({ msg: "Token invalid" });
//         }

//         res.json({
//             username: foundUser.username
//         });
//     } catch (error) {
//         res.json({
//             msg: "Invalid or expired token"
//         });
//     }
// });

// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });
