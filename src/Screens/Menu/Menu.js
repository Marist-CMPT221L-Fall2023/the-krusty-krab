import React from "react";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Grid from '@material-ui/core/Grid'
import Stack from '@mui/material/Stack';
import Patty from './Krabby-Patty-Burger.webp'; // Replace with the actual path to your logo image
import Headers from "../../Components/Header1"; 
import FooterPage from "../../Components/Footer";
import LunchDinner from "./LunchDinnerMenu.pdf"
import Dessert from "./DessertMenu.pdf"




export default function Menu(){
    return(
        <div>
            <Headers/>
            <Box style = {{backgroundColor: "white", height:500 }}>
                <Grid container spacing={2} style = {{textAlign: "center"}}>
                    <Grid item xs={6} style = {{ textAlign: "center", alignItems: "center" , alignContent: "center"}}>
                        <Stack direction="column" spacing={4} style = {{paddingTop: "6%"}}>
                            <Button variant="contained" href = {LunchDinner} target = "_blank" style= {{backgroundColor:"#DDA0DD", fontFamily: "'Purple Purse', 'serif'", fontSize: 20, color:"black", width: 450, height: 100, marginLeft: "30%"}} >LUNCH & DINNER</Button>
                            <Button variant="contained" href = {Dessert} target = "_blank" style= {{backgroundColor:"#DDA0DD", fontFamily: "'Purple Purse', 'serif'", fontSize: 20,color:"black",width: 450, height: 100, marginLeft: "30%"}} >DESSERT</Button>
                        </Stack>
                    </Grid>
                    <Grid item xs = {6} style = {{textAlign: "right"}}>
                        <img src={Patty} alt="Patty" style={{ height: 700,width: 1000, marginTop:30, marginTop: -140,paddingBottom: 100}}/>

                    </Grid>


                </Grid>
            

            </Box>
            <FooterPage/>



        </div>

    )
   
}







