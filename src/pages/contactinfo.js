import React from "react";
import Navbar from "../tools/Navbar";
import AnimatedPage from "../tools/AnimatedPage";

function Contact(){
    return(
        <div>
            <Navbar></Navbar>
            <AnimatedPage>
        <h2 id="welcome">Email:</h2>
        <p id="a1">jhnmndz1234@gmail.com</p>

        <h2 id="linked">LinkedIn:</h2>
        <a href="https://www.linkedin.com/in/john-mendez-b1a79820a/" id="a1">https://www.linkedin.com/in/john-mendez-b1a79820a/</a>

            </AnimatedPage>
        </div>
    )
}

export default Contact;