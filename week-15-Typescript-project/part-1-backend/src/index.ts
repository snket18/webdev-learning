import express from "express";
import mongoose from "mongoose"
import jwt from "jsonwebtoken";
import { LinkModel , UserModel } from "./db";
import { random } from "./utils";
import { ContentModel } from "./db";
import { userMiddleware } from "./middleware";
import { JWT_SECRET } from "./config";


const app = express();
app.use(express.json());



app.post("/api/v1/signup" ,  async function  (req , res){

    // imp things use Zod for validation and Hashing for Passwords 
    const username = req.body.username;
    const password = req.body.password;

    await UserModel.create({
        username : username,
        password : password
    })
     
    res.json({
        message : "user has signed up successfully"
    })

})

app.post("/api/v1/signin" , async function  (req , res){
    const username = req.body.username;
    const password = req.body.password;
    const existingUser = await UserModel.findOne({
        username,
        password
    })

    if(existingUser){
        const token = jwt.sign({
            id : existingUser._id
        }, JWT_SECRET)

        res.json({
            token
        })
    }else {
        res.status(403).json({
            message : "wrong credentials"
        })
        
    }

})

app.post("/api/v1/content" ,userMiddleware ,async function  (req , res){
       const { link, title } = req.body;
    // Create a new content entry linked to the logged-in user.
    await ContentModel.create({
  link ,
  title,
  userId: req.userId,
  tags: []
});


    res.json({ message: "Content added" }); // Send success response.
})

app.get("/api/v1/content", userMiddleware, async (req, res) => {
    // @ts-ignore
    const userId = req.userId;
    const content = await ContentModel.find({
        userId: userId
    }).populate("userId", "username")
    res.json({
        content
    })
})

app.post("/api/v1/content" ,userMiddleware , async function  (req , res){
    const contentId  = req.body.contentId ;

    ContentModel.deleteMany({
        contentId ,
        userId : req.userId
    })

    res.json({
        message : "content deleted"
    })

})

app.post("/api/v1/brain/share", userMiddleware, async (req, res) => {
    const share = req.body.share;
    if (share) {
            const existingLink = await LinkModel.findOne({
                userId: req.userId
            });

            if (existingLink) {
                res.json({
                    hash: existingLink.hash
                })
                return;
            }
            const hash = random(10);
            await LinkModel.create({
                userId: req.userId,
                hash: hash
            })

            res.json({
                hash
            })
    } else {
        await LinkModel.deleteOne({
            userId: req.userId
        });

        res.json({
            message: "Removed link"
        })
    }
})

app.get("/api/v1/brain/:shareLink", async (req, res) => {
    const hash = req.params.shareLink;

    const link = await LinkModel.findOne({
        hash
    });

    if (!link) {
        res.status(411).json({
            message: "Sorry incorrect input"
        })
        return;
    }
    // userId
    const content = await ContentModel.find({
        userId: link.userId
    })

    console.log(link);
    const user = await UserModel.findOne({
        _id: link.userId
    })

    if (!user) {
        res.status(411).json({
            message: "user not found, error should ideally not happen"
        })
        return;
    }

    res.json({
        username: user.username,
        content: content
    })

})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
})