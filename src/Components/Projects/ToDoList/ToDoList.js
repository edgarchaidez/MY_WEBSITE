import React from 'react';

import ToDoList1 from "../../../assets/ToDoList1.png";
import ToDoList2 from "../../../assets/ToDoList2.png";
import toDoList from '../../../assets/to_do_list.jar';
import CardUI from '../../../shared/Card/CardUI';
import GetAppIcon from '@material-ui/icons/GetApp';
import { IconButton } from '@material-ui/core';
import classes from './ToDoList.module.css';
import List from '../../List/List';
import Tooltip from '@material-ui/core/Tooltip';

const ToDoList = () => {

  const tools = [
    {"name": "Java"},
    {"name": "GitHub"},
    {"name": "Eclipse IDE"},
  ];

  const title = "To-Do List Application";
  const content =  "This was an academic group project where I worked in a team of 4. We " +
  "were instructed to create a to-do list application with a graphical " +
  "user interface using Java which supported features such as adding, " +
  "deleting, updating, sorting, and saving/loading the list. Each item " +
  "on the list had a priority number, description, due date, and status " +
  "indicating whether the task has been completed. My role was to " +
  "create and test the functions required to update the list, namely " +
  "functions for adding, deleting. updating, and sorting the list which " +
  "were implemented using the ArrayList class in Java."

  return (
    <CardUI title={title} content={content}>
        <List list={tools} />
      <div className={classes.Images}>
        <img
          className={classes.Images1}
          alt="To-do list app options menu"
          src={ToDoList1}
        ></img>
        <img
          className={classes.Images2}
          alt="To-do list app adding task"
          src={ToDoList2}
        ></img>
      </div>
      <div className={classes.icon}>
        <Tooltip title="The Github repository for this project is private but you can use the application through this tar file download.">
          <IconButton
            href={toDoList}
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