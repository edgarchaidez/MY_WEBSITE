import React from 'react'

import classes from "./AboutScreen.module.css"

const AboutScreen = () => {

    return (
      <React.Fragment>
        <h1>EDGAR CHAIDEZ</h1>
        <div className={classes.About}>
          <h3>About Me</h3>
          <p>
          
          </p>
        </div>
        <div className={classes.Playlist}>
          <iframe
            title="Website Playlist"
            src="https://open.spotify.com/embed/playlist/2JDeMrfFnT6XrT0sGtix8D"
            width="70%"
            height="380"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </React.Fragment>
    );
}

export default AboutScreen;