const express = require ("express")

const app = express();


// you have given an express server which has few endpoints 
// your task is to
//1. ensure that if ther is ever an exception the end user sees a status code of 404 
//2. maintiaon the errorcount variable whose value should go uyp every time there is an exception in any endpoint 

app.get('/user',function(req,res){
//let a; // undefined
//a.length;// thow an error
res.status(200).json({name:'johm'});
})

app.post('user',function (req,res){
    res.status(200).json({msg : 'dummy user created'});
});

app.get('/errorCount',function(req,res){
    res.status(200).json ({errorCount});
});

app.listen(3000,() => {
  console.log("server has started ")
})