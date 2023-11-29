import React from "react";
import Button from "@mui/material/Button"; 
import Stack from '@mui/material/Stack';
import Grid from '@material-ui/core/Grid'
import Box from '@mui/material/Box';
import "./style.css";
import Krab from './images/TheKrustyKrab1.png'; // Replace with the actual path to your logo image
import { GiHamburger } from "react-icons/gi";



const buttons = [
  <Button key="one">HOME</Button>,
  <Button key="two">ABOUT</Button>,
  <Button key="three">MENU</Button>,
  <Button key="four">RESERVE</Button>,

];


function FooterPage() {
  return (
    <Box style = {{backgroundColor: "#D8D8D8", height:320 }}>
      <Grid container spacing={2} style = {{textAlign: "center"}}>
        <Grid item xs={4}>
          <p style = {{fontFamily: "'Purple Purse', 'serif'", fontSize: 30, color: "black"}}> <GiHamburger/> The Krusty Krab</p>
          <div style = {{fontFamily: "'DM Sans', 'sans-serif'", fontSize: 15, color: "white"}}>
            Come visit us today<br />
            to have the best food in Bikini Bottom!!

          </div>
          <div style = {{fontFamily: "'DM Sans', 'sans-serif'", fontSize: 15, color: "black", marginTop: 20}}>
            24 Conch Street,<br/>
            Bikini Bottom, Pacific Ocean 12345


          </div>


          
        </Grid>
        <Grid item xs={4} style = {{textAlign: "center", alignItems: "center" , alignContent: "center"}}>  
        

          <Box style= {{textAlign: "center", justifyContent: "center"}}>
            <p style = {{fontFamily: "'DM Sans', 'sans-serif'", fontSize: 20, color: "white"}}>Pages</p>

            <div>
              <Stack direction="column" spacing={2} style={{paddingLeft: "29%"}} >
                <Button variant="contained" href = "/Home"style= {{backgroundColor:"#DDA0DD", width: 150, fontFamily: 'Fira Sans', width: 10, height: 20, marginLeft: "20%"}} >HOME</Button>
                <Button variant="contained" href = "/Menu"style= {{backgroundColor:"#DDA0DD", width: 150, fontFamily: 'Fira Sans', width: 10, height: 20,  marginLeft: "20%"}}>MENU</Button>
                <Button variant="contained"style= {{backgroundColor:"#DDA0DD", width: 150, fontFamily: 'Fira Sans', width: 10, height: 20,  marginLeft: "20%"}}>ABOUT</Button>
                <Button variant="contained" href = "/Reserve"style= {{backgroundColor:"#DDA0DD", width: 150, fontFamily: 'Fira Sans', width: 10, height: 20,  marginLeft: "20%"}}>RESERVE</Button>
            </Stack>

            </div>
           
          </Box>
           
        </Grid>
        <Grid item xs={4} style = {{textAlign: "center"}}>
          <Box>
              <img src={Krab} alt="Krab" style={{ height: 200,width: 320, marginRight: 10, marginTop:30, marginBottom: 20}}/>



          </Box>

        </Grid>

      </Grid>

      <hr style = {{width:"85%", marginTop: 20}}></hr>

    </Box>

      
    );
  };
  
  


        
       



      

    
      
    

   


export default FooterPage;