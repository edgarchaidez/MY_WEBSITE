import React from 'react';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { Card } from '@material-ui/core';
import classes from './CardUI.module.css';

const CardUI= (props) => {
    return(
        <Card elevation={2} square="false" className={classes.Card}>
            {props.children}
        </Card>
    );
}

export default CardUI;