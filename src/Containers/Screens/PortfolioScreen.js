import React from 'react';

import classes from "./PortfolioScreen.module.css";
import NumberGuesser from '../../Components/Projects/NumberGuesser/NumberGuesser';
import Capstone from '../../Components/Projects/Capstone/Capstone';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { IconButton } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '../../Components/Button/Button';

import SimpleImageSlider from "react-simple-image-slider";

const PortfolioScreen = () => {

    return (
      <React.Fragment>
        <h1 style={{ fontFamily: "Roboto", marginBottom: "0" }}>EDGAR CHAIDEZ</h1>
        <div className={classes.SocialMedias}>
        <Tooltip title="My Github">
          <IconButton href="https://github.com/edgarchaidez" target="_blank" >
            <GitHubIcon style={{ color: "black" }} color="primary" fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="My LinkedIn">
          <IconButton href="https://www.linkedin.com/in/edgar-chaidez/" target="_blank">
            <LinkedInIcon style={{ color: "black" }}fontSize="large" />
          </IconButton>
        </Tooltip>
        </div>
        <Button />
        <h2>EDUCATION</h2>

        <h2>PROJECTS</h2>
        <body className={classes.PortfolioScreen}>
          <Capstone />
          <NumberGuesser />
        </body>
      </React.Fragment>
    );
}

export default PortfolioScreen;