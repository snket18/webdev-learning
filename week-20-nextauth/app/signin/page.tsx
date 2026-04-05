'use client'
import axios from "axios"

export default function Signin (){
      

    return <div>
        Signin Page
        <br></br>
        <input type="text" />
        <input type="password" />
        <button className="bg-red-300 border-4 border-r-4 bg-sky-300 text-black" onClick={ async () => {
            const res = await axios.post("http://localhost:3000/api/signin" ,{
                username : "sanket",
                password : "123123"
            })

            localStorage.setItem("token" , res.data.token);
        }}>Signin here !</button>
    </div>
}