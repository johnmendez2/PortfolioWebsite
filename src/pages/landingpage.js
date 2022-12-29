import React from "react";
import AnimatedPage from "../tools/AnimatedPage";
import "./landingpage.css"
import Navbar from "../tools/Navbar";
import Button from "../tools/Button";
import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Landing(){
    let navigate = useNavigate();
    return(
        <div>
            <Navbar></Navbar>
            <AnimatedPage>
        <h1 id="welcome">Full-Stack Developer, Aspiring Data Analyst</h1>
        <p id="a1"> I am a 4th Year student at Heriot Watt University looking to make a name for myself in the industry.
         <br></br>
         Check out some of my projects!
         </p>
         <Button id="projbut" theme="red" onClick={() => navigate("/projects")}> View Projects</Button>
         <h1 id="hidcontinf">Contact information</h1>
         <h1 id="hidden">jhnmndz1234@gmail.com</h1>
        <a href="https://www.linkedin.com/in/john-mendez-b1a79820a/" id="a2"><i class="fa fa-linkedin-square"></i></a>
            </AnimatedPage>
        </div>
        
    )
}

export default Landing;