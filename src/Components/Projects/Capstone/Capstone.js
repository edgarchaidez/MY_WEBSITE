import React from 'react';

import capstone from "../../../assets/capstone.png";
import CardUI from '../../../shared/Card/CardUI';
import LanguageIcon from '@material-ui/icons/Language';
import Tooltip from '@material-ui/core/Tooltip';
import { IconButton } from '@material-ui/core';
import List from '../../List/List';
import classes from './Capstone.module.css';

const tools = [
  { name: "Unity" },
  { name: "C#" },
  { name: "GitHub" },
  { name: "Agile Development"},
];

const Capstone = () => {
  
  const title = "NASA Psyche Space Virtual Reality Capstone Project";
  const content = "As part of NASA's upcoming Psyche mission, this capstone project" +
  "involved developing a VR application, through Unity, giving the " +
  "public a fun opportunity to learn more about the mission and the " +
  "Psyche spacecraft. I worked as part of a team of 6 where we " +
  "practiced agile development with bi-weekly sprints. I personally " +
  "contributed to many aspects of development including labeling the " +
  "main instruments of the spacecraft with clickable buttons which " +
  "highlighted when viewed, creating panels that displayed additional " +
  "information on the instruments which were displayed whenever such " +
  "buttons where clicked, creating a tutorial room where the user can " +
  "learn about the different controls available on the VR controllers, " +
  "as well as fix issues left behind by previous capstone teams."

  return (
    <CardUI title={title} content={content}>
      <List list={tools} />
      <div className={classes.Images}>
        <img src={capstone} alt="NASA Psyche Reality Capstone Project, ASU" />
      </div>
      <div className={classes.icon}>
        <Tooltip title="Psyche Team Website">
          <IconButton
            href="https://psyche.asu.edu/get-involved/capstone-projects/spacecraft-virtual-reality/"
            target="_blank"
          >
            <LanguageIcon color="inherit" fontSize="large" />
          </IconButton>
        </Tooltip>
      </div>
    </CardUI>
  );
};
  
  export default Capstone;