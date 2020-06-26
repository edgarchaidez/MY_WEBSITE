import React from 'react';

import NavigationItem from '../NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = () => (
    <ul className={classes.NavigationItems}> 
        <NavigationItem link="/" exact>PORTFOLIO</NavigationItem>
        <NavigationItem link="/about">ABOUT</NavigationItem>
    </ul>
);

export default NavigationItems;