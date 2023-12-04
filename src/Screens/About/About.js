import React from "react";
import Headers from "../../Components/Header1";
import TopAbout1 from "../../Components/TopAbout";
import FooterPage from "../../Components/Footer";
import SpongeBob from "./SpongeBobImg.png";
import MrKrabs from "./MrKrabsImg.png";
import Squidward from "./SquidwardImg.png";
import Connor from "./ConnorImg.png";
import Shannon from "./ShannonImg.png";
import Olaf from "./OlafImg.png";
import Kai from "./KaiImg.png";
import Caroline from "./CarolineImg.png";

const people = [
    { photo: SpongeBob, jobTitle: 'Spongebob Squarepants', jobDescription: 'Head Chef' },
    { photo: MrKrabs, jobTitle: 'Eugene Krabs', jobDescription: 'Owner & General Manager' },
    { photo: Squidward, jobTitle: 'Squidward Tetacles', jobDescription: 'Cashier' },
    { photo: Connor, jobTitle: 'Connor Fleischman', jobDescription: 'Sous Chef' },
    { photo: Shannon, jobTitle: 'Shannon Maier', jobDescription: 'Head Waitress' },
    { photo: Olaf, jobTitle: 'Olaf Madejski', jobDescription: 'Chief of Security' },
    { photo: Kai, jobTitle: 'Kai Cottle', jobDescription: 'Bartender' },
    { photo: Caroline, jobTitle: 'Caroline Eagen', jobDescription: 'Head Hostess' },
];


export default function About() {
    return (
        
        <div>

            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Headers />
            <TopAbout1 />
            <h1 style={{ color: "#DDA0DD" }} >Our People</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem' }} className="people-grid">
                {people.map((person, index) => (
                    <div key={index} style={{ backgroundColor: "#EDE4F1", padding: '1rem', border: '1px solid #ddd', borderRadius: '4px', textAlign: 'center' }} className="person-card">
                        <img src={person.photo} alt={person.jobTitle} style={{ width: '100%', height: 'auto' }} />
                        <h2 style={{ color: 'red', fontFamily: 'Fira Sans' }} >{person.jobTitle}</h2>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
                            <p style={{ color: 'white', fontFamily: 'Fira Sans', border: '2px solid black', padding: '10px', backgroundColor: "#DD7A91", borderRadius: '100px', width: '150px' }} >{person.jobDescription}</p>
                        </div>
                    </div>
                ))}
            </div>

            </div>
            <hr width="100%" size="40" align="center" color="white" ></hr>

        <FooterPage/>
        </div>










    )
}