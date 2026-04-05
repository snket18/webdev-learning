// import  { BrowserRouter ,  Routes, Route, Link , useNavigate , Outlet} from 'react-router-dom';


// export default function App() {
//   return <div>
//     <BrowserRouter>
    

//       <Routes>
//         <Route path='/' element={<Layout />} >
//           <Route path="/neet/11" element={<Class11Program />}  > </Route>
//           <Route path="/neet/12" element={<Class12Program />}  > </Route>
//            <Route path="/" element={<LandingPage />}  > </Route>
//           <Route path="*" element={<ErrorPage />}  > </Route> 

//         </Route>
//       </Routes>


//     </BrowserRouter>
//   </div>
// }


// function Layout(){
//    return <div>
//      <Header/>
     
//      <div>
//     <Outlet/>
//       </div>
//       Footer
//    </div>
// }

// function Header(){
//   return <div>
//       <Link to="/">Allen</Link>
//       | 
//       <Link to="/neet/11">Class 11</Link> 
//       | 
//       <Link to="/neet/12">Class 12</Link>

//   </div>
// }

// function ErrorPage(){
//   return <div>
//     Page not Found !!
//   </div>
// }

// function Class11Program(){
//    return <div>
//      Welcome to Class 11 program !!
//    </div>
// }


// function Class12Program(){
//    return <div>
//      Welcome to Class 12 program !!
//    </div>
// }


// function LandingPage(){
//   return <div>
//     Welcome to home 
//        </div>
// }




// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// function App() {

//   return <div>
//     <BrowserRouter>
//       <Link to="/">Allen</Link>
//       | 
//       <Link to="/neet/online-coaching-class-11">Class 11</Link> 
//       | 
//       <Link to="/neet/online-coaching-class-12">Class 12</Link>
//       <Routes>
//         <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
//         <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
//         <Route path="/" element={<Landing />} />
//       </Routes>
//     </BrowserRouter>
//   </div>
// }

// function Landing() {
//   return <div>
//     Welcome to allen
//   </div>
// }

// function Class11Program() {
//   return <div>
//       NEET programs for Class 11th
//   </div>
// }

// function Class12Program() {
//   return <div>
//       NEET programs for Class 12th
//   </div>
// }

// export default App



//  Clock with Start and Stop button 

import { useState } from "react";

export default function App(){

  const [counter , setCounter] = useState(0);
  const timer = useRef();

 
   function startClock(){
      let value = setInterval(function() {
       setCounter(c => c +  1);
    },1000) 
    timer.current = value ;
  }

  function stopClock(){
    clearInterval(timer.current)
  }

  return <div>
    {counter}
    <br />
     <button onClick={startClock}>Start clock </button>
    <button onClick={stopClock}>Stop clock </button>
  </div>
}