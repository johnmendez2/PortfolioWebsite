import React from "react";
import Navbar from "../tools/Navbar";
import AnimatedPage from "../tools/AnimatedPage";

function Contact(){
    return(
        <div>
            <Navbar></Navbar>
            <AnimatedPage>
            <h2 id="linked">GitHub:</h2>
        <a href="https://github.com/johnmendez2" id="cont">https://github.com/johnmendez2</a>

        <h2 id="linked">LinkedIn:</h2>
        <a href="https://www.linkedin.com/in/john-mendez-b1a79820a/" id="cont">https://www.linkedin.com/in/john-mendez-b1a79820a/</a>
        <h2 id="linked">Email:</h2>
        <p id="cont">jhnmndz1234@gmail.com</p>


            </AnimatedPage>
        </div>
    )
}

export default Contact;