import React from 'react';

import CardUI from '../../../shared/Card/CardUI';
import GitHubIcon from '../../../shared/GithubIcon/GithubIcon';
import classes from './WindAPI.module.css';
import windAPI from '../../../assets/WindAPI.png';
import List from '../../List/List';

const WindAPI = () => {
    
    const tools = [
        {"name": "C#"},
        {"name": ".NET Framework"},
        {"name": "WCF Service"},
        {"name": "ASP.NET Web Application"},
    ];

    const title = "Wind Speed API";
    const content = "I developed this API as a WCF Service Application using .NET Framework " +
    "as a means to determine the wind speeds of a location and in turn whether that location would " +
    "be a good place to set up renewable wind energy sources. The API takes in a pair of coordinates " +
    "which it then passes to OpenWeather's 5-day forecast API. It extracts the location and wind data " +
    "from the OpenWeather API and calculates the minimum, maximum, and average wind speeds " +
    "for that location. I used an ASP.NET Web Application (image below) to try out the API.";

    return (
      <CardUI title={title} content={content}>
        <List list={tools} />
        <div className={classes.Images}>
          <img
            src={windAPI}
            alt="Web application showcasing wind speed service api"
          />
        </div>
        <GitHubIcon url="https://github.com/edgarchaidez/wind-speed-api" />
      </CardUI>
    );
};

export default WindAPI;