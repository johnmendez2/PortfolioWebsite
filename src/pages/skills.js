import React from "react";
import Navbar from "../tools/Navbar";
import Card from "../tools/Card";
import "../tools/Card.css"

function Skills() {
    return (
        <div>
            <Navbar></Navbar>
            <div className="wrapper">
                <div className="icon-card">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                        alt=""
                        loading="lazy"
                        class="skills"
                    />
                    <div className="sname">JavaScript</div>
                </div>
                <div className="icon-card">
                    <img
                        src="https://raw.githubusercontent.com/duythien0912/flutter_zalo_login/master/flutter.jpeg"
                        alt=""
                        loading="lazy"
                        class="skills"
                    />
                    <div className="sname">Flutter</div>
                </div>
                <div className="icon-card">
                    <img
                        src="https://i.pinimg.com/736x/71/5b/59/715b59c8c7545d9dafb1a04111edde40.jpg"
                        alt=""
                        loading="lazy"
                        class="skills"
                    />
                    <div className="sname">C</div>
                </div>
                <div className="icon-card">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png"
                        alt=""
                        loading="lazy"
                        class="skills"
                    />
                    <div className="sname">Java</div>
                </div>
                <div className="icon-card">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/919/919852.png"
                        alt=""
                        loading="lazy"
                        class="skills"
                    />
                    <div className="sname">Python</div>
                </div>
                <div className="icon-card">
                    <img
                        src="https://img.icons8.com/color/480/tensorflow.png"
                        alt=""
                        loading="lazy"
                        class="skills"
                    />
                    <div className="sname">TensorFlow</div>
                </div>
                <div className="icon-card">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1183/1183672.png"
                        alt=""
                        loading="lazy"
                        class="skills"
                    />
                    <div className="sname">React JS</div>
                </div>
                <div className="icon-card">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/919/919825.png"
                        alt=""
                        loading="lazy"
                        class="skills"
                    />
                    <div className="sname">Node JS</div>
                </div>
                <div className="icon-card">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2111/2111366.png"
                        alt=""
                        loading="lazy"
                        class="skills"
                    />
                    <div className="sname">git</div>
                </div>
                <div className="icon-card">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/732/732220.png"
                        alt=""
                        loading="lazy"
                        class="skills"
                    />
                    <div className="sname">Excel</div>
                </div>
                <div className="icon-card">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/919/919827.png"
                        alt=""
                        loading="lazy"
                        class="skills"
                    />
                    <div className="sname">HTML 5</div>
                </div>
            </div>
        </div>


    )
}

export default Skills;