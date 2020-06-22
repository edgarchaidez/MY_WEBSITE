import React from 'react';

import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import asuLogo from '../../assets/ASU-Logo.png';
import classes from './Education.module.css';

const Education = () => {

    return (
      <Card elevation={2} square="false" className={classes.Card}>
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
          <Typography variant="body2" color="textSecondary" component="p">
            I created this app while I was learning React Native. It's a simple
            app that takes in a two digit number by the user and uses a number
            generator to guess the user's number.
          </Typography>
        </CardContent>
        <Divider variant="middle" />
        <CardContent>
          <Typography variant="body" color="textPrimary" component="h3">
            Arizona State University
          </Typography>
          <Typography variant="body" color="textPrimary" component="h5">
            Master of Computer Science
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            I created this app while I was learning React Native. It's a simple
            app that takes in a two digit number by the user and uses a number
            generator to guess the user's number.
          </Typography>
        </CardContent>
      </Card>
    );
};

export default Education;