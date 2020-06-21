import React, { useState, useEffect } from 'react';

import NavigationItems from './NavigationsItems/NavigationItems';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import classes from './Navigation.module.css';
import './Navigation.module.css'

const Navigation = (props) => {

  const getWindowDimensions = () => {
    const { innerWidth: width } = window;
    return width;
  };

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
    
  let windowSize = windowDimensions;

  let displayNav = (
    <nav>
      <NavigationItems />
    </nav>
  );

  
  if(windowSize <= 500) {
    let navClass = "NavHide";
    displayNav = (
      <IconButton className={classes.MuiIconButton} onClick={props.drawerToggleClicked}>
        <MenuIcon color="inherit" />
      </IconButton>
    );

    if(props.open) {
      navClass = ".NavShow";
      displayNav = (
        <React.Fragment>
          <IconButton
            className={classes.MuiIconButton}
            onClick={props.drawerToggleClicked}
          >
            <MenuIcon color="inherit" />
          </IconButton>
          <nav className={navClass}>
            <NavigationItems />
          </nav>
        </React.Fragment>
      );
    }
  }

  return (
      <div className={classes.Navigation}>
        {displayNav}
      </div>
  );
}

export default Navigation;