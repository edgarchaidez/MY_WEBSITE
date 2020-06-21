import React from 'react';

import classes from './Button.module.css';

const Button = () => {
    return (
      <div className={classes.Button}>
        <a
          href="https://drive.google.com/file/d/1T6-lqMc3YHaaORC3CiMDj1cXBcucWgQP/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          RESUME
        </a>
      </div>
    );
};

export default Button;