import React from 'react';
import "./PortfolioScreen.css";
import Card from "../Components/Card";
import app1 from "../Images/app1.png";
import app2 from "../Images/app2.png";

const PortfolioScreen = () => {
    return (
        <div className="Projects">
            <Card>
            <h2>Projects</h2>
            </Card>
            <Card>
            <h1 className="Proj">React Native Mobile App</h1>
            </Card>
            <Card>
                <div className='app-images'>
                <img className="app-images1"src={app1} ></img>
                <img className= "app-images2" src={app2}></img>
                </div>
            </Card>
        </div>
    );
}

export default PortfolioScreen;