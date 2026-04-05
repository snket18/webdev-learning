const {Router} = require("express");

const courseRouter = Router();
const {courseModel} = require ("../db");

   


        courseRouter.post("/course/purchase", function (req, res) {
            res.json({
                message: "signup endpoint"
            })

        })

        courseRouter.get("/course/preview", function (req, res) {
            res.json({
                message: "signin endpoint"
            })
        })
    



module.exports = {
    courseRouter : courseRouter
}



