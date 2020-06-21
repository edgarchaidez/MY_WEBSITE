import React from 'react'
import logo from '../../logo.svg';
import "./AboutScreen.css"

const AboutScreen = () => {
    return(
        <div>
            <h1 style={{fontFamily: "Roboto"}}>EDGAR CHAIDEZ</h1>
            <img src={logo} className="top-logo" alt="logo" />
                <h2 className="introduction">
                    Currently under construction
                    <br />
                    Please standby...
                </h2>
        </div>
    );
}

export default AboutScreen;