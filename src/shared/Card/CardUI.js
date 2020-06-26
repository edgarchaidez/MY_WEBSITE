import React from 'react';

import { Card, Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import classes from './CardUI.module.css';

const CardUI= (props) => {
    let content = null;
    if(props.content) content = props.content;

    return (
      <Card elevation={2} square className={classes.Card}>
        <CardContent style={{paddingBottom: "0"}}>
          <div className={classes.Typography}>
            <Typography color="textPrimary" component="h3">
              {props.title}
            </Typography>
            <Typography color="textPrimary" component="p">
              {content}
            </Typography>
            <Typography color="textPrimary" component="h4">
              Tools:
            </Typography>
          </div>
        </CardContent>
        {props.children}
      </Card>
    );
}

export default CardUI;