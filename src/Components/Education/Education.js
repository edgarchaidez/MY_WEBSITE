import React from 'react';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Card } from "@material-ui/core";
import asuLogo from '../../assets/ASU-Logo.png';
import classes from './Education.module.css';
import List from '../List/List';

const Education = () => {

  const coursesUndergrad = [
    { name: "Object-Oriented Programming" },
    { name: "Intro to Software Engineering" },
    { name: "Data Structures and Algorithms" },
    { name: "Operating Systems" },
    { name: "Intro to Theoretical Computer Science" },
    { name: "Computer Networks" },
    { name: "Computer Network Security" },
    { name: "Database Management" },
  ];

  const coursesGrad = [
    { name: "Intro to Human and Computer Interaction" },
    { name: "Distributed Software Development" },
    { name: "Foundations of Algorithms" },
  ];

    return (
      <Card elevation={2} square style={{ marginBottom: "50px" }}>
        <CardContent className={classes.Content}>
          <div className={classes.Logo}>
            <a
              href="https://www.asu.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={asuLogo} alt="Arizona State University logo" />
            </a>
          </div>
          <div className={classes.Typography}>
            <Typography color="textPrimary" component="h3">
              Arizona State University
            </Typography>
            <Typography color="textPrimary" component="h4">
              Bachelor of Science in Computer Science
            </Typography>
            <Typography color="textPrimary" component="p">
              GPA: 3.69
            </Typography>
            <Typography
              style={{ marginBottom: "5px" }}
              color="textPrimary"
              component="p"
            >
              Major GPA: 4.00
            </Typography>
            <Typography color="textPrimary" component="p">
              Coursework:
            </Typography>
          </div>
        </CardContent>
        <List list={coursesUndergrad} />
        <Divider variant="middle" />
        <CardContent className={classes.Content}>
          <div className={classes.Typography}>
            <Typography color="textPrimary" component="h4">
              Master of Computer Science
            </Typography>
            <Typography color="textPrimary" component="p">
              GPA: 4.00
            </Typography>
            <Typography color="textPrimary" component="p">
              Coursework:
            </Typography>
          </div>
        </CardContent>
        <List list={coursesGrad} />
      </Card>
    );
};

export default Education;