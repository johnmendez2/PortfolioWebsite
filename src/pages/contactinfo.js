import React from "react";
import Navbar from "../tools/Navbar";
import AnimatedPage from "../tools/AnimatedPage";

function Contact(){
    return(
        <div>
            <Navbar></Navbar>
            <AnimatedPage>
            <h2 id="linked">GitHub:</h2>
        <a href="https://github.com/johnmendez2" id="a1">https://github.com/johnmendez2</a>

        <h2 id="linked">LinkedIn:</h2>
        <a href="https://www.linkedin.com/in/john-mendez-b1a79820a/" id="a1">https://www.linkedin.com/in/john-mendez-b1a79820a/</a>
        <h2 id="linked">Email:</h2>
        <p id="a1">jhnmndz1234@gmail.com</p>


            </AnimatedPage>
        </div>
    )
}

export default Contact;