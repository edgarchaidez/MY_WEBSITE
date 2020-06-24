import React from 'react';

import ToDoList1 from "../../../assets/ToDoList1.png";
import ToDoList2 from "../../../assets/ToDoList2.png";
import CardUI from '../../../shared/Card/CardUI';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import GetAppIcon from '@material-ui/icons/GetApp';
import { IconButton } from '@material-ui/core';
import classes from './ToDoList.module.css';
import Tooltip from '@material-ui/core/Tooltip';

const ToDoList = () => {
  return (
    <CardUI>
      <CardContent>
        <Typography variant="body" color="textPrimary" component="h3">
          To-Do List Application in Java
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          I created this app while I was learning React Native. It's a simple
          app that takes in a two digit number by the user and uses a number
          generator to guess the user's number.
        </Typography>
      </CardContent>
      <div className={classes.Images}>
        <img
          className={classes.Images1}
          alt="A mobile app"
          src={ToDoList1}
        ></img>
        <img
          className={classes.Images2}
          alt="A mobile app part 2"
          src={ToDoList2}
        ></img>
      </div>
      <div className={classes.icon}>
        <Tooltip title="The Github repository for this project is private but you can use the application through this tar file download.">
          <IconButton
            href="https://firebasestorage.googleapis.com/v0/b/my-website-e2015.appspot.com/o/to_do_list.jar?alt=media&token=676c1603-6531-440a-8619-354d52e38b10"
            download
          >
            <GetAppIcon color="inherit" fontSize="large" />
          </IconButton>
        </Tooltip>
      </div>
    </CardUI>
  );
};

export default ToDoList;