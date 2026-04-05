// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {


//   return (
//     <div>
//       <Counter >

//       </Counter>
//     </div>
//   )


// }


// function Counter(){

//   return <div>
//     <Increase></Increase>
//     <Decrease></Decrease>
//   </div>
// }


// function Increase(){
//   return <div>

//   </div>
// }


// function Decrease(){
//   return <div>

//   </div>
// }

// export default App



import { useRecoil } from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom, evenSelector } from "./storage/recoil/recoil";



export default function App() {


  return <div>
    <RecoilRoot>
      <Button></Button>
      <Counter></Counter>
      <IsEven></IsEven>
    </RecoilRoot>
  </div>
}


function Button() {

  const setCount = useSetRecoilState(counterAtom);

  function increase() {
    setCount(c => c + 2);

  }

  function decrease() {
     setCount(c => c - 1);

  }

  return <div>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>decrease</button>
  </div>
}

function Counter() {
  const count = useRecoilValue(counterAtom);

  return <div>
    {count}
  </div>


}

function IsEven() {

  const even = useRecoilValue(evenSelector);


  return <div>
    {even ? "even" : "odd"}
  </div>
}