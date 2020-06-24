import React from 'react';

import CardUI from '../../../shared/Card/CardUI';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from '@material-ui/core';
import classes from './Website.module.css';
import Tooltip from '@material-ui/core/Tooltip';

const Website = () => {
    return (
      <CardUI>
        <CardContent >
          <Typography variant="body" color="textPrimary" component="h3">
            This Website
            <Typography variant="body2" color="textSecondary" component="p">
              :)
            </Typography>
          </Typography>
        </CardContent>
        <div className={classes.icon}>
        <Tooltip  title="GitHub Repo">
            <IconButton
              href="https://github.com/edgarchaidez/MY-WEBSITE"
              target="_blank"
            >
              <GitHubIcon color="inherit" fontSize="large" />
            </IconButton>
          </Tooltip>
          </div>
      </CardUI>
    );
};

export default Website;