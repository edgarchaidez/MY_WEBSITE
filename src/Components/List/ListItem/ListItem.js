import React from 'react';

import classes from './ListItem.module.css';

const ListItem = (props) => (
    <div className={classes.ListItem}>
        <p>{props.label}</p>
    </div>
);

export default ListItem;