import React from "react";
import Headers from "../../Components/Header1"; 
import Box from '@mui/material/Box';
import Krusty from "./KrustyKrabHome.webp"
import Inside from "./KrustyInside.webp"
import FooterPage from "../../Components/Footer";

export default function Home(){
    return(
        <div>
            <Headers />
            <Box style = {{textAlign: "center", backgroundImage: `url(${Krusty})`,  backgroundSize: "cover", height: 700, opacity: "0.7"}}>
                <div style = {{fontFamily: "'Purple Purse', 'serif'", fontSize: 60, color: "black",opacity:"1.0" ,padding: "20%"}}>
                    Best Food in <br />
                    Bikini <br/>
                    Bottom!!

                </div>

  
            </Box>
            <Box style = {{backgroundImage: `url(${Inside})`,  backgroundSize: "cover", height: 650,}}>
            </Box>
            <FooterPage/>




        </div>
       


    )

}