require('dotenv').config()
const express = require ("express");
const mongoose = require ("mongoose")
const { userRouter} = require ("./routes/user");
// const {createCourseRoutes} = require("./routes/"); 
const {courseRouter} = require("./routes/course");
const {adminRouter} = require ("./routes/admin");
const user = require("./routes/user");
//Routing in express , the express Router 
const app = express();
app.use(express.json())

app.use("/api/v1/user",userRouter);
app.use("/api/v1/admin",adminRouter);
app.use("/api/v1/courses",courseRouter);



 async function main () {

   await mongoose.connect(process.env.MONGO_URL)
   app.listen (3000,() => {
        console.log("server has started on port 3000")
    });


}
  

main();