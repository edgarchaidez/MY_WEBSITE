import React from 'react';

import capstone from "../../../assets/capstone.png";
import Card1 from "../../Card/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { Card } from '@material-ui/core';
import classes from './Capstone.module.css';


const Capstone = () => {
  return (
    <Card elevation={2} square="false" className={classes.Card}>
      <CardContent>
        <Typography variant="body" color="textPrimary" component="h3">
          NASA Psyche Space Virtual Reality Capstone Project
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Some stuff
        </Typography>
      </CardContent>
      <div className={classes.Images}>
        <img
          src={capstone}
          alt="NASA Psyche Reality Capstone Project, ASU"
          className={classes.img}
        />
      </div>
    </Card>
  );
};
  
  export default Capstone;