import React from "react";
import AnimatedPage from "../tools/AnimatedPage";
import "./landingpage.css"

function Landing(){
    return(
            <div>
        <nav className="nav">
      <ul>
      <AnimatedPage>

        <button id="button1">
          HOME
        </button>
        <button id="button1">
          PORTFOLIO
        </button>
        <button id="button1">
            CONTACT INFO
        </button>
        </AnimatedPage>
      </ul>
    </nav>
    </div>
    )
}

export default Landing;