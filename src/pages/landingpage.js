import React from "react";
import AnimatedPage from "../tools/AnimatedPage";
import "./landingpage.css"
import Navbar from "../tools/Navbar";
import Button from "../tools/Button";
import {useNavigate} from 'react-router-dom';

function Landing(){
    let navigate = useNavigate();
    return(
        <div>
            <Navbar></Navbar>
            <AnimatedPage>
        <h1 id="welcome">Full-Stack Developer, Aspiring Data Management Specialist</h1>
        <p id="a1"> I am a 4th Year student at Heriot Watt University looking to make a name for myself in the industry.
         <br></br>
         Check out some of my projects!
         </p>
         <Button id="projbut" theme="red" onClick={() => navigate("/projects")}> View Projects</Button>
            </AnimatedPage>
        </div>
        
    )
}

export default Landing;