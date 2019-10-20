import React from 'react'
import Card from "../Components/Card";
import logo from '../logo.svg';
import "./AboutScreen.css"

const AboutScreen = () => {
    return(
        <div>
            <img src={logo} className="top-logo" alt="logo" />
            <main>
                <h2 className="introduction">
                    Hey, I'm Edgar and this is the website I created using React! 
                </h2>
                <h2 className="introduction">Here's a couple things about me</h2>
            </main>
            <a
                className="bottom-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
                </a>
        </div>
    );
}

export default AboutScreen;