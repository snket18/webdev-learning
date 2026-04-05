const express = require ("express");

const app = express();


// wheen someone is bombarding request for many time and you want restrict that user to one request for one user . 
// which will rate limit the request from user to only 5 requests per seconds 
//should block them with a 404.
// clears every one second

app.use (function (req,res,next) {

})

let numberOfRequestsForUser ={};
serInterval( ()=> {
    numberOfRequestsForUser ={};
},1000 )


app.use (function(req,res,next){
    const  userId = req.headers["user=Id"];
    if (numberOfRequestsForUser[userId]) {
        numberOfRequestsForUser[userId] = numberOfRequestsForUser + 1;
    if (numberOfRequestsForUser[userId]> 5){
        res.status(404).send("no entry");
    }else {
        next();
    }
    }else {
        numberOfRequestsForUser[userId]= 1;
        next();
    }
})