import React from "react"; 
import Headers from "./Components/Header1"; 
import "./Components/style.css"
import FooterPage from "./Components/Footer";
import Menu from "./Screens/Menu/Menu"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  
function App() { 
  return ( 
    <div classnname = "App" style = {{minHeight:"100vh", display: "flex", flexDirection: "column", overflowX: "hidden"}}>
      <Router>
        <Routes>
         <Route exact path = "/" element={<Headers />} />
         <Route path='/Menu' element={<Menu />} />



        </Routes>

      </Router>
      


\     

    </div>
   
  ); 
} 
export default App;