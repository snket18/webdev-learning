
import {useRef , useEffect } from "react";


export  function usePrev(value){
    const ref = useRef();
   

    useEffect(function (){
        ref.current = value
    }, [value]

)

return ref.current
    
    
}