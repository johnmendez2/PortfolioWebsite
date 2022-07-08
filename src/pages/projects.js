import React from "react";
import Navbar from "../tools/Navbar";
import Card from "../tools/Card";
import "../tools/Card.css"

function Projects(){
    return(
        <div>
            <Navbar></Navbar>
            <div className="wrapper">

            <Card img="https://raw.githubusercontent.com/F28WP-Dubai-Karoshi/KaroshiGame/master/mockup/updatedIndex.png"
        title="Virus.io"
        description="Play as a virus and work your way up the leaderboard by eating pellets and avoiding the masks and sanitizers. Chat with other people as you play!" link= "https://github.com/F28WP-Dubai-Karoshi/KaroshiGame"></Card>
        <Card img="https://docs.flutter.dev/assets/images/flutter-logo-sharing.png"
        title="Amber Collaborative Platform"
        description="A collaborative content mash-up platform as a safe, creative space for people to share original media content, facilitate mixing-and-matching others’ content (possibly with their own), share their mash-up creations, and work with other people live during the creation and sharing processes." link="https://github.com/F29SO-Amber/Amber"></Card>
        <Card img="https://miro.medium.com/max/1400/1*dQyfOpFWmSxrmdOcQgW6OQ.jpeg"
        title="Steganography"
        description="Program to hide text in plain sight on red pixels of GIMP images."
        link="https://github.com/johnmendez2/Steganography"
        ></Card>
        <Card img="https://media.istockphoto.com/photos/passenger-airplane-flying-above-clouds-during-sunset-picture-id155439315?k=20&m=155439315&s=612x612&w=0&h=BvXCpRLaP5h1NnvyYI_2iRtSM0Xsz2jQhAmZ7nA7abA="
        title="Fly Planner"
        description="Flight Travel Planner using Dijkstra's Algorithm and Graphs."
        link="https://github.com/johnmendez2/FlyPlanner-Java"
        ></Card>
        <Card img="https://image.shutterstock.com/image-vector/conceptual-tag-cloud-containing-words-260nw-386269018.jpg"
        title="Spell Checker"
        description="Program to give word suggestions if spelling does not match those in dictionary."
        link="https://github.com/johnmendez2/SpellCheck-Java"
        ></Card>
        <Card img="https://media.istockphoto.com/photos/bowling-shoes-picture-id908916136?k=20&m=908916136&s=612x612&w=0&h=0mc1H5Oy_6ngPmFuiQ2eUUlwzIgoPdNF4KEOW44mZIA="
        title="Ten Pin Manager"
        description="Program using Thread Safe Multithreading and Concurrency with Threads acting as players booking a Lane in a Bowling Alley."
        link="https://github.com/johnmendez2/TenPinManager-Java"
        ></Card>

        <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPUvsjS_eMdmUPUHwPioPsnx-qHZX6eab86A&usqp=CAU"
        title="TicTacToe Intelligent Agents"
        description="Java program that uses Value Iteration and Policy Iteration to create Intelligent Agents that never lose a game of TicTacToe."
        link="https://github.com/johnmendez2/TicTacToeAI"
        ></Card>

        <Card img="https://media.istockphoto.com/vectors/broken-lock-on-the-background-abstract-electronic-circuit-board-with-vector-id873916354?k=20&m=873916354&s=612x612&w=0&h=YKop1XB7DYreSrpHMotFsqy_YteYUrSFxjp5l1BlC20="
        title="CodeBreaker"
        description="Simple Codebreaker game made using C that can be played on the terminal including ARM Code that can display score on HEX Displays."
        link="https://github.com/johnmendez2/Mastermind-using-C-ARM"
        ></Card>

        <Card img="https://media.istockphoto.com/photos/chatbot-conversation-on-smartphone-screen-app-interface-with-picture-id983456560?k=20&m=983456560&s=612x612&w=0&h=FnFK9OFXv_uXx9q5hxuNBNTxnxmHmQMIpeplvJW8hng="
        title="Relaxa"
        description="ChatBot deployed on Telegram to give the user Hobby suggestions using a score based system."
        link="https://github.com/johnmendez2/Relaxa"
        ></Card>
        </div>
        </div>
        

    )
}

export default Projects;