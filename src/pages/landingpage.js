import React from "react";
import AnimatedPage from "../tools/AnimatedPage";
import "./landingpage.css"
import Navbar from "../tools/Navbar";
import Button from "../tools/Button";
import {useNavigate} from 'react-router-dom';
import Typical from "react-typical";

function Landing(){
    let navigate = useNavigate();
    return(
        <div>
            <Navbar></Navbar>
            <AnimatedPage>
        <h1 id="welcome">Hi, I'm John</h1>
        <p id="a1"> I am a{' '} 
        <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
                'Student 🏫',
                1000,
                'Data Scientist 🔭',
                1000,
                'Full-Stack Software Developer ⌨',
                1000,
                'Web Developer 💻',
                1000,
                'Mobile Software Developer 📱',
                1000,
            ]}
        />
         </p>
         <p id="a1">Check out some of my work!</p>
         <Button id="projbut" theme="red" onClick={() => navigate("/projects")}> View Projects</Button>
         <Button id="projbuthid" theme="red" onClick={() => navigate("/skills")}> View Skills</Button>
         <h1 id="hidcontinf">Contact information</h1>
         <h1 id="hidden">jhnmndz1234@gmail.com</h1>
        <a href="https://www.linkedin.com/in/john-mendez-b1a79820a/" id="a2"><i class="fa fa-linkedin-square"></i></a>
            </AnimatedPage>
        </div>
        
    )
}

export default Landing;