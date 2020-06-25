import React from 'react';

import capstone from "../../../assets/capstone.png";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardUI from '../../../shared/Card/CardUI';
import classes from './Capstone.module.css';


const Capstone = () => {
  return (
    <CardUI>
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
        />
      </div>
    </CardUI>
  );
};
  
  export default Capstone;