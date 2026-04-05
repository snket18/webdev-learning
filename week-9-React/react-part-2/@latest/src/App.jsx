import {useState} from "react"


export default function App(){

    const [count , setCount ] = useState(0);

    

    setInterval(function (){
        setCount(count + 1);
    },2000)

    return <div>

    
        {count}
   
    
    </div>
}