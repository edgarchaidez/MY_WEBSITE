import React from 'react';

import { IconButton } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import GitHubIcon from '@material-ui/icons/GitHub';
import classes from "./GithubIcon.module.css";

const GithubIcon = (props) => {
    return (
        <div className={classes.icon}>
        <Tooltip title="GitHub Repo">
          <IconButton
            //href="https://github.com/edgarchaidez/wind-speed-api"
            href={props.url}
            target="_blank"
          >
            <GitHubIcon color="inherit" fontSize="large" />
          </IconButton>
        </Tooltip>
      </div>
    );
};

export default GithubIcon;