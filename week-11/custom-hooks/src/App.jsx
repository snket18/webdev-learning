//CUSTOM HOOKS 
// import { useState } from 'react'

// function useCounter(){
//   const [count , setCount ] = useState(0); // inside the custom hook 
//   // , hame useState hi use karna hai 

//   function increaseCount(){
//     setCount(count + 1);
//   }

//   return {
//     count : count ,
//     increaseCount : increaseCount
//   }
// }


// function App() {
//   const {count , increaseCount} = useCounter(0);
//   //inside the main Component we need to use the custom hook , the fucntion 
//   // as object with State variable  

//   return <div>
//    <button onClick={increaseCount}>increase {count} </button>
//   </div>
// }

// export default App




// Custom hooks - useFetch hook 

// import { useEffect, useState } from 'react'
// import './App.css'
// import { useFetch, usePostTitle } from './hooks/useFetch'


// function App() {
//     //  const postTitle = usePostTitle(); // it is also a hook 

//     // useFetch is hook where provided url mai data hai wo data hume dikhta hai 

//     const {finalData} = useFetch("");
//     return (
//         <div>
//             {/* {postTitle} */}
//             {JSON.stringify(finalData)}
//         </div>

//     )
// }
// export default App




// custom hook - usePrev 
// it return the previous value but actually it is wrong 


// import {useState } from "react" ;
// import { usePrev } from "./hooks/usePrev";


// function App(){
//   const [count , setCount] = useState(0);
//   const prev = usePrev(count)


//   function increase(){
//     setCount( count + 1);
//   }
  

//   return <div>
     
//     <button onClick={increase}>increase value {count}</button>
//     <div>the previous value was {prev}</div>
//   </div>
// }

// export default App;



// custom hook - useDebounce 
// whenever we search any thing from the backend when ever we type it will wait for time we given 
// after the wait it send the backend request for searching or expensive operation ..

// debounce take argument as stateVariable and time 



import { useState , useEffect } from 'react' ;

const useDebounce = (value , delay) => {
  const [debouncedValue , setDebouncedValue ] = useState(value);


  useEffect (()=> {
      const handler = setTimeout(()=> {
        setDebouncedValue(value);
      } ,delay )
 

  return () => {
    clearTimeout(handler)
  }
  } , [value , delay])

  return debouncedValue
}


export default function App(){

     const [inputVal , setInputVal ] = useState("");
     const debouncedValue = useDebounce(inputVal , 200) ; // input as value and time 

     function change(e){
      setInputVal(e.target.value)
     }

     useEffect ( () => {
       // exensive operation 
      console.log("expensive operation ")

     },[debouncedValue])



  return <div>
    <input  id="input"  type="text" placeholder='Search here' onChange={change} />
  </div>
}