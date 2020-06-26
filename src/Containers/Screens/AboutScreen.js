import React from 'react'

import classes from "./AboutScreen.module.css"

const AboutScreen = () => {

    return (
      <React.Fragment>
        <h1>EDGAR CHAIDEZ</h1>
        <div className={classes.About}>
          <h3>About Me</h3>
          <p>
            Hi, my name is Edgar Chaidez. I'm a first generation college
            graduate from Arizona State University where I initially enrolled as
            an astropysics major as I've always enjoyed working with equations
            and solving problems. It was here where I was first introduced to
            programming and where I learned that coding and my enjoyment for
            problem solving go hand-in-hand as well as the amazing and useful
            things you can create with code. This was what ultimately led me to
            change my major to computer science halfway through my sophmore year
            and I haven't looked back since. Now I strive to create applications
            that can have a true, positive impact on people's lives.
          </p>
          <p>
            Apart from programming I'm also very interested in music and
            basketball. I also enjoy skateboarding, playing the piano, video
            games, and exercising and although a jack of all trades is a master
            of none, I just find it fun to learn new skills and continuously try
            to improve upon myself.
          </p>
        </div>

        <h3>Contact</h3>
        <div className={classes.Contact}>
          <p>Phone: (480)-735-4506</p>
          <p>Email: edgar.chaidez3@gmail.com</p>
        </div>
      </React.Fragment>
    );
}

export default AboutScreen;