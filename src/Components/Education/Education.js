import React from 'react';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CardUI from '../../shared/Card/CardUI';
import asuLogo from '../../assets/ASU-Logo.png';
import classes from './Education.module.css';
import Courses from './Courses';

const Education = () => {

    return (
      <CardUI>
        <CardContent>
          <div className={classes.Logo}>
            <a
              href="https://www.asu.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={asuLogo} alt="Arizona State University logo" />
            </a>
          </div>
          <Typography variant="body" color="textPrimary" component="h3">
            Arizona State University
          </Typography>
          <Typography variant="body" color="textPrimary" component="h5">
            Bachelor of Science in Computer Science
          </Typography>
          <Typography variant="p" color="textPrimary" component="p">
            GPA: 3.69
          </Typography>
          <Typography variant="p" color="textPrimary" component="p">
            Coursework:
          </Typography>
          <Courses undergrad />
        </CardContent>
        <Divider variant="middle" />
        <CardContent>
          <Typography variant="body" color="textPrimary" component="h5">
            Master of Computer Science
          </Typography>
          <Typography variant="p" color="textPrimary" component="p">
            GPA: 4.00
          </Typography>
          <Typography variant="p" color="textPrimary" component="p">
            Coursework:
          </Typography>
          <Courses />
        </CardContent>
      </CardUI>
    );
};

export default Education;