import React from "react";
import Button from "@mui/material/Button"; 
import "./style.css"
import AppBar from "@mui/material/AppBar"; 
import Box from "@mui/material/Box"; 
import Toolbar from "@mui/material/Toolbar"; 
import Typography from "@mui/material/Typography"; 
import Logo from './KrustyLogo1.png'; // Replace with the actual path to your logo image



export default function Headers(){
    return(
        <div className = "header">
            <hr width = "100%" size = "40" align = "center" color = "purple"></hr>
            <AppBar position="" style = {{backgroundColor: "white" }}>  
                <Toolbar style = {{height: "100px"}}> 
                    <Box sx={{flexGrow:1 }}>
                        <img src={Logo} alt="Logo" style={{ height: 140, marginRight: 10, marginTop:10}} />                    </Box>
                    
                    <Box 
                        m={1}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        className = "header-buttons"
                    >
                        <Button variant="contained" style= {{backgroundColor:"#DDA0DD", marginRight:70, width: 150, fontFamily: 'Fira Sans'}} >HOME</Button>
                        <Button variant="contained" style= {{backgroundColor:"#DDA0DD", marginRight:70, width: 150, fontFamily: 'Fira Sans'}}>MENU</Button>
                        <Button variant="contained"style= {{backgroundColor:"#DDA0DD", marginRight:70, width: 150, fontFamily: 'Fira Sans'}}>ABOUT</Button>
                        <Button variant="contained"style= {{backgroundColor:"#DDA0DD", marginRight:70, width: 150, fontFamily: 'Fira Sans'}}>RESERVE</Button>
                    
                    </Box>  

                    <Box sx = {{flexGrow:1 }}>
                        <Typography variant = "h6" style={{textAlign:"right", fontFamily: 'Georgia', color: "black"}}> 718-244-5127</Typography>

                    </Box> 
                
                    

         
                </Toolbar> 
            </AppBar> 
            
        </div>
    )
}