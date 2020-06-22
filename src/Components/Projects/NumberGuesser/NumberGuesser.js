import React from 'react';

import app1 from "../../../assets/app1.png";
import app2 from "../../../assets/app2.png";
import Card1 from "../../Card/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { Card } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from '@material-ui/core';
import classes from './NumberGuesser.module.css';
import Tooltip from '@material-ui/core/Tooltip';

const NumberGuesser = () => {
  return (
    <Card elevation={2} square="false">
        <CardContent>
          <Typography variant="body" color="textPrimary" component="h3">
            React Native Mobile App
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            I created this app while I was learning React Native. It's a simple
            app that takes in a two digit number by the user and uses a number
            generator to guess the user's number.
          </Typography>
        </CardContent>
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
        <div className={classes.icon}>
          <Tooltip title="GitHub Repo">
          <IconButton href="https://github.com/edgarchaidez/NUMBER-GUESSER" target="_blank">
            <GitHubIcon color="inherit" fontSize="large" />
          </IconButton>
          </Tooltip>
        </div>
    </Card>
  );
};

export default NumberGuesser;