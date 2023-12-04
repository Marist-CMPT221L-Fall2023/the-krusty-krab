import React from "react";
import "./style.css";
import Map from './images/BikiniBottomMap.png';
import Logos from './images/SocialLogos.png';

function TopAbout1() {
    return (
     
        <div style={{ display: 'flex', alignItems: 'center' , fontFamily: 'DM Sans, sans-serif', fontSize: 18, fontWeight: 'bold', backgroundColor: '#C8F0F4'}}>
            <div style={{ display: 'flex 1',  marginTop: '20px',marginBottom: '20px', width: '400px', marginLeft: '300px'}}>
                <div style={{marginBottom: '20px', padding: '30px',backgroundColor: '#DA1846', color: 'white', borderRadius: '8px' , paddingTop: '10px', paddingBottom: '15px'}}>
                    <span style ={{ fontSize: 20, lineHeight: 1.5}}>Visit Us</span><br />
                    <span style = {{ fontSize: 16, paddingLeft: '10px' }}>124 Conch Street,</span><br />
                    <span style = {{ fontSize: 16, paddingLeft: '10px' }}>Bikini Bottom, Pacific Ocean 12345</span>
                </div>
                <div style={{ marginBottom: '20px',padding: '30px', backgroundColor: '#DA1846', color: 'white', borderRadius: '8px', paddingTop: '10px', paddingBottom: '15px' }}>
                    <span style ={{ fontSize: 20, lineHeight: 1.5}}>Contact Us</span><br />
                    <span style = {{ fontSize: 16, paddingLeft: '10px' }}>Phone: 718-224-5187</span><br />
                    <span style = {{ fontSize: 16, paddingLeft: '10px' }}>Email: inquiries@krustykrab.com</span><br />
                    <span style = {{ fontSize: 16, paddingLeft: '10px' }}>Follow Us: @KrustyKrab</span><br />
                    <img src = {Logos} alt = "Logos" style={{maxWidth: '50%'}} /> 
                </div>

                <div style={{ marginBottom: '20px', padding: '30px' , backgroundColor: '#DA1846', color: 'white', borderRadius: '8px', paddingTop: '10px', paddingBottom: '20px'}}>
                    <span style ={{ fontSize: 20, lineHeight: 2.2}}> Hours:</span><br />
                    <span style = {{ fontSize: 16, paddingLeft: '10px' }}>Sunday: Closed</span><br /> 
                    <span style = {{ fontSize: 16, paddingLeft: '10px' }}>Monday: Closed</span><br />
                    <span style = {{ fontSize: 16, paddingLeft: '10px' }}>Tuesday: 11:00 - 8:00</span><br />
                    <span style = {{ fontSize: 16, paddingLeft: '10px' }}>Wednesday: 11:00 - 8:00</span><br />
                    <span style = {{ fontSize: 16, paddingLeft: '10px' }}>Thursday: 11:00 - 8:00</span><br />
                    <span style = {{ fontSize: 16, paddingLeft: '10px' }}>Friday: 11:00 - 10:00</span><br />
                    <span style = {{ fontSize: 16, paddingLeft: '10px' }}>Saturday: 11:00 - 10:00</span><br />
                </div>
              
            </div>
                <div style={{ flex: 1 , display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src = {Map} alt= "Map" style={{ maxWidth: '75%', marginRight: '100px'}} />
            </div>
            </div>



    );
};


export default TopAbout1;