import React from 'react';

import classes from './Drawer.module.css';

const Drawer = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked} >
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default Drawer;