import React from 'react';

import CardUI from '../../../shared/Card/CardUI';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import classes from './WindAPI.module.css';
import windAPI from '../../../assets/WindAPI.png';

const WindAPI = () => {
    return (
      <CardUI>
        <CardContent>
          <Typography variant="body" color="textPrimary" component="h3">
            Wind Speed API
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Some stuff
          </Typography>
        </CardContent>
        <div className={classes.Images}>
          <img
            src={windAPI}
            alt="Wind speed service api"
          />
        </div>
        <div className={classes.icon}>
          <Tooltip title="GitHub Repo">
            <IconButton
              href="https://github.com/edgarchaidez/wind-speed-api"
              target="_blank"
            >
              <GitHubIcon className={classes.git} color="inherit" fontSize="large" />
            </IconButton>
          </Tooltip>
        </div>
      </CardUI>
    );
};

export default WindAPI;