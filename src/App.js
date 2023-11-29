import React from "react"; 
import "./Components/style.css"
import Menu from "./Screens/Menu/Menu"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from  "./Screens/Homepage/Home"
import Reservation from "./Screens/Reserve/Reservation";
  
function App() { 
  return ( 
    <div classnname = "App" style = {{minHeight:"100vh", display: "flex", flexDirection: "column", overflowX: "hidden"}}>
      <Router>
        <Routes>
         <Route exact path = "/" element={<Home />} />
         <Route path='/Menu' element={<Menu />} />
         <Route path = "/Home" element = {<Home/>}/>
         <Route path = "/Reserve" element = {<Reservation/>}/>

         



        </Routes>

      </Router>
      


\     

    </div>
   
  ); 
} 
export default App;