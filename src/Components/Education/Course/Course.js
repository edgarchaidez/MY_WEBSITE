import React from 'react';

import classes from './Course.module.css';

const Course = (props) => (
    <div className={classes.Course}>
        <p>{props.label}</p>
    </div>
);

export default Course;