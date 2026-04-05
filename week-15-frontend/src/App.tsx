import Dashboard from "./pages/dashboard"
import Signup from "./pages/signup"
import Signin from "./pages/signin"
import { BrowserRouter , Route , Routes } from "react-router-dom" 



function App() {
  

  return <div>
    <BrowserRouter>
       <Routes>
        <Route path="/signup" element={<Signup /> }></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
       </Routes>
    </BrowserRouter>
   {/* <Dashboard /> */}
   
  </div>
  
}

export default App
