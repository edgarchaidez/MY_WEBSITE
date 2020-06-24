import React from 'react';

import classes from "./PortfolioScreen.module.css";

import NumberGuesser from '../../Components/Projects/NumberGuesser/NumberGuesser';
import Capstone from '../../Components/Projects/Capstone/Capstone';
import ToDoList from '../../Components/Projects/ToDoList/ToDoList';
import Website from '../../Components/Projects/Website/Website';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import { IconButton } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import ResumeButton from '../../Components/Buttons/ResumeButton';
import Education from '../../Components/Education/Education';
import Skills from '../../Components/Skills/Skills';

const PortfolioScreen = () => {

    return (
      <React.Fragment>
        <h1 style={{ fontFamily: "Roboto", marginBottom: "0" }}>
          EDGAR CHAIDEZ
        </h1>
        <div className={classes.SocialMedias}>
          <Tooltip title="My Email">
            <IconButton href="mailto:echaide1@asu.edu" target="_blank">
              <MailOutlineIcon style={{ color: "black" }} fontSize="large" />
            </IconButton>
          </Tooltip>
          <Tooltip title="My Github">
            <IconButton href="https://github.com/edgarchaidez" target="_blank">
              <GitHubIcon style={{ color: "black" }} fontSize="large" />
            </IconButton>
          </Tooltip>
          <Tooltip title="My LinkedIn">
            <IconButton
              href="https://www.linkedin.com/in/edgar-chaidez/"
              target="_blank"
            >
              <LinkedInIcon style={{ color: "black" }} fontSize="large" />
            </IconButton>
          </Tooltip>
        </div>
        <div className={classes.Bio}>
          <p>Hi, this is Edgar. </p>
          <p>
            I'm a recent Computer Science graduate from Arizona State University
            <span role="img" aria-label="party popper">
              {" "}
              🎉
            </span>
            and I'm currently searching for a full time job position as a
            software/full-stack engineer. I've always been interested in
            creating user facing applications and especially ones that can
            hopefully make people's lives a bit better. I'm also continuing my
            education with a Master's of Computer Science at ASU so any
            internship opportunities are also welcomed.
          </p>
        </div>
        <ResumeButton />
        <div className={classes.Sections}>
          <h2>EDUCATION</h2>
          <body>
            <Education />
          </body>
          <h2>SKILLS</h2>
          <body className={classes.Skills}>
            <Skills />
          </body>
          <h2>PROJECTS</h2>
          <body>
            <Capstone />
            <NumberGuesser />
            <ToDoList />
            <Website/>
          </body>
        </div>
      </React.Fragment>
    );
}

export default PortfolioScreen;