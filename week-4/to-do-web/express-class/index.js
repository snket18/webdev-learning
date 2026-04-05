// creating HTTPS server using express library 

const express = require ("express");

const app = express();

var user = [
    {
    name: "harkirat",
    kidneys : [{
        healthy :false
    }]
}
] ;

app.use(express.json());

app.get("/user",function (req,res){
    const johnKidneys = user[0].kidneys;
    console.log({johnKidneys})
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    
    for (let i=0;i < johnKidneys.length ; i++) {
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.status(200).json({
        johnKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
        
    })
})
app.use(express.json());

app.post("/user",function(req,res){
    console.log(req.body); // undefined
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        healthy: isHealthy
    })
    res.json ({
        msg:"Done!"
    })
    
})

app.put("/user",function(req,res){
    for (let i=0 ; i < user[0].kidneys.length;i++){
        user[0].kidneys[i].healthy = true;
    }
    res.json ({
       
    })
})

//removing all the unhealthy kidneys
app.delete ("/user",function(req,res){
   if (isThereAtleastOneUnhealthyKidney()) {
    const newKidneys = [];
    for (let i=0 ; i < user[0].kidneys[i].length;i++) {
       if( user[0].kidneys[i].healthy) {
         newKidneys.push({
            healthy:true
         })
      }
   }
   user[0].kidneys = newKidneys;
   res.json({msg:"done"})
} else {
    res.status(411).json({
        msg:"you have no bad kidneys"
    });


    // let newKidneys=[];
    // for (let i=0; i <user[0].kidneys.length ;i++ ) {
    //    if ( user[0].kidneys[i].healthy) {
    //     newKidneys.push({
    //         healthy:true
    //     })
    //    }
    // }
    // user[0].kidneys=newKidneys;
    // res.json({msg:"done !"})
}
})

function isThereAtleastOneUnhealthyKidney() {
    let isThereAtleastOneUnhealthyKidney= false;
    for( let i=0; i< user[0].kidneys.length;i++){
        if( !user[0].kidneys[i].healthy) {
            isThereAtleastOneUnhealthyKidney = true;
        }
    }
    return isThereAtleastOneUnhealthyKidney
}


app.listen(3000, ()=>{
    console.log("server started on port 3000")
});



