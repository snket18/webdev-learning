const express = require('express');
const mongoose = require('mongoose');

const app = express();


app.post ("/signup" , function (req , res) {

     res.json ({
        message : "you have signup successfully"
     })
})


app.post ()