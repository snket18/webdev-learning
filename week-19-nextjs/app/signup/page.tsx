"use client" // when we use onClick handler you should add use Client above
import axios from "axios"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup(){
    const router = useRouter();
    
    const [username , setUserName] = useState("");
    const [ password , setPassword ] = useState("")

    return <div className="w-screen h-screen flex justify-center items-center border-white p-3 "> 
        <div className="border p-2">
                        <input type="text" placeholder="username" onChange={e => {
                            setUserName(e.target.value);
                        }} />
                    
                        <input type="password" placeholder="password" onChange={e => {
                            setPassword(e.target.value);
                        }} />
                
                    <button onClick={() => {
                        console.log(username);
                        console.log(password);
                        axios.post("http://localhost:3000/api/v1/signup",{
                            username,
                            password
                        })

                        router.push("/signin")
                    }}>Signup</button>
        </div>
    </div>
}