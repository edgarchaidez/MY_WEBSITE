import React from 'react';

import app1 from "../../../assets/app1.png";
import app2 from "../../../assets/app2.png";
import CardUI from '../../../shared/Card/CardUI';
import GithubIcon from '../../../shared/GithubIcon/GithubIcon';
import List from '../../List/List';
import classes from './NumberGuesser.module.css';

const NumberGuesser = () => {

  const tools = [
    {"name": "React Native"},
    {"name": "JavaScript"},
    {"name": "Chrome Developer Tools"},
  ];

  const title = " React Native Mobile App";
  const content = "This is a simple mobile app that I created as a practice project " +
  "when I was first learning React Native. It takes in a two-digit " +
  "number as input and attempts to guess this number by randomly " +
  "generating a number of it's own. If the random number does not match " +
  "the input number, it asks the user whether the random number is " +
  "greater than or less than the input number."

  return (
    <CardUI title={title} content={content}>
      <List list={tools} />
      <div className={classes["app-images"]}>
        <img
          className={classes["app-images1"]}
          alt="A mobile app"
          src={app1}
        ></img>
        <img
          className={classes["app-images2"]}
          alt="A mobile app part 2"
          src={app2}
        ></img>
      </div>
      <GithubIcon url="https://github.com/edgarchaidez/NUMBER-GUESSER" />
    </CardUI>
  );
};

export default NumberGuesser;