import { useState , createContext , useContext } from 'react'
import './App.css'

const BulbContext = createContext();


export default function App(){
  const [bulbOn , setBulbOn ] = useState(true);

  return <div>
    <BulbContext.Provider value= {{
      bulbOn : bulbOn,
      setBulbOn : setBulbOn

    }} >
    <LightBulb/>
    </BulbContext.Provider>
  </div>
}

function LightBulb(){
  return <div>
    <BulbState/>
    <LightSwitch/>
  </div>
}

function BulbState(){

  const {bulbOn} = useContext(BulbContext);
  return <div>
    {bulbOn ? "bulb is on " : "bulb is off"}

  </div>
}

function LightSwitch (){
  const {bulbOn , setBulbOn} = useContext(BulbContext);

  function toggle(){
    setBulbOn(!bulbOn);
  }

  return <div>
    <button onClick={toggle}>ON-OFF</button>
  </div>
}





  