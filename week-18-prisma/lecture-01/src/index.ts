import { PrismaClient } from "@prisma/client"; // same as import moongoose from mongoose
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";
import express from "express";
import { Client } from "pg";
const app = express();
import bcrypt from "bcrypt";


const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});
export const prisma = new PrismaClient({ adapter });

async function createUser (){
    try {
        await prisma.user.create({
        data : {
            username : "sakeyyy",
            password : "123123",
            city  : "delhi",
            pincode : 133123,
            age : 23,
            createdAt: new Date()
}
    })
    } catch (error) {
        console.error("error while creating user: ", error);
    }
    
}


createUser();




app.get("/users" , async function (req , res ){
    const users = await prisma.user.findMany()

    res.json({
        users
    })
})

app.get("/users/todos/:id" , async function (req,res){
    const id = req.params.id;

    const user = await prisma.user.findFirst({
        where:{
            //@ts-ignore
            id : Number(id) 
        },
        
        
    })
    res.json({
        user
    })
    
})

app.post("/signup", async function ( req , res ){
    const username = req.body.username;
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password,16) // await karna important hai 
    const email = req.body.email;

    const newUser = await prisma.user.create({
        data : {
             username,
            //@ts-ignore
            password: hashedPassword,
             email
        } 

    })

    res.json({
        message : "you have signed up successfully"
    })
    
})

app.listen(3000);