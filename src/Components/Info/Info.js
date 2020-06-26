import React from 'react';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import { IconButton } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';

import classes from './Info.module.css';

const Info = () => {
    return (
        <div className={classes.SocialMedias}>
          <Tooltip title="My Email">
            <IconButton href="mailto:edgar.chaidez3@gmail.com" target="_blank">
              <MailOutlineIcon style={{ color: "black" }} fontSize="large" />
            </IconButton>
          </Tooltip>
          <Tooltip title="My Github">
            <IconButton href="https://github.com/edgarchaidez" target="_blank">
              <GitHubIcon style={{ color: "black" }} fontSize="large" />
            </IconButton>
          </Tooltip>
          <Tooltip title="My LinkedIn">
            <IconButton
              href="https://www.linkedin.com/in/edgar-chaidez/"
              target="_blank"
            >
              <LinkedInIcon style={{ color: "black" }} fontSize="large" />
            </IconButton>
          </Tooltip>
        </div>
    );
};

export default Info;