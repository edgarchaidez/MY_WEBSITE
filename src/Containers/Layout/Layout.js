import React, { useState }from 'react';

import Nav from '../../Components/Navigation/Navigation';
import Copyright from '../../Components/Copyright/Copyright';
import classes from './Layout.module.css';

const Layout = (props) => {

    const [drawerClicked, setDrawerClicked] = useState(false);

    const drawerToggleHandler = () => {
        setDrawerClicked(!drawerClicked);
    };

    return (
      <React.Fragment >
        <header className={classes.headerStyle} />
        <Nav drawerToggleClicked={drawerToggleHandler} open={drawerClicked}/>
        <main className={classes.Layout}>
          {props.children}
        </main>
        <Copyright />
      </React.Fragment>
    );
};

export default Layout;