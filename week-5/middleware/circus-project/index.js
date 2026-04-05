const express = require ("express");

const app = express();
let requestCount = 0;

app.use (function (req,res,next){
    requestCount = requestCount+1 ;
    next();
})

function isOldEnoughMiddleware(req,res,next) { // last route nahi hai isliye use kar sakte hai 
    //last route hoga toh "next" use karne ki jarurat nahi hai 
    const age = req.query.age;
    if(age >= 14) {
        next(); // next middle ware ko details already pata chalegi ye funciton use karne se 
    } else {
        res.json ({
        msg:"sorry you are not of age yet"
    });
}
}

app.use (isOldEnoughMiddleware);

app.get("/ride2",function (req,res) {
    res.json ({
        msg:"you have successfully riden the ride 2",
    });
});

app.get("/ride1",  function(req,res){
    res.json({
        msg:"you have successfully riden the ride 1",
    });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
