import React from 'react';

import classes from "./PortfolioScreen.module.css";

import NumberGuesser from '../../Components/Projects/NumberGuesser/NumberGuesser';
import Capstone from '../../Components/Projects/Capstone/Capstone';
import ToDoList from '../../Components/Projects/ToDoList/ToDoList';
import WindAPI from '../../Components/Projects/WindAPI/WindAPI';
import Website from '../../Components/Projects/Website/Website';

import Info from '../../Components/Info/Info';
import ResumeButton from '../../Components/Buttons/ResumeButton';
import Education from '../../Components/Education/Education';
import Skills from '../../Components/Skills/Skills';

const PortfolioScreen = () => {

    return (
      <React.Fragment>
        <h1 style={{ marginBottom: "0" }}>
          EDGAR CHAIDEZ
        </h1>
        <Info />
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
            creating user facing applications and especially ones that
            hopefully make people's lives a bit better. I'm also continuing my
            education with a Master of Computer Science at ASU so
            internship opportunities are also welcomed.
          </p>
        </div>
        <ResumeButton />
        <div className={classes.Sections}>
          <h2>EDUCATION</h2>
            <Education />
          <h2>SKILLS</h2>
          <div className={classes.Skills}>
            <Skills />
          </div>
          <h2>PROJECTS</h2>
          <div>
            <Capstone />
            <NumberGuesser />
            <ToDoList />
            <WindAPI />
            <Website/>
          </div>
        </div>
      </React.Fragment>
    );
}

export default PortfolioScreen;