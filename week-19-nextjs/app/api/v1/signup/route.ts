import { PrismaClient } from "@/app/generated/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import prismaClient from "../../../lib/db";

 export async function POST(req : NextRequest){
    // req.body ??

    const data = await req.json();
    console.log(data);

    await prismaClient.user.create({
        data : {
            username : data.username,
            password : data.password
        }
    })
 

    return NextResponse.json({
        message : "you have successfully signed up !"
    })
 }

 export async function GET ( req : NextRequest){

    const user = await  prismaClient.user.findFirst();

    return NextResponse.json ({
        user 
    }) 
    
 }