import React from 'react';

import Course from './Course/Course';
import classes from './Courses.module.css';

const coursesUndergrad = [
    {course: 'Object-Oriented Programming'},
    {course: 'Intro to Software Engineering'},
    {course: 'Data Structures and Algorithms'},
    {course: 'Operating Systems'},
    {course: 'Intro to Theoretical Computer Science'},
    {course: 'Computer Networks'},
    {course: 'Computer Network Security'},
    {course: 'Database Management'},
];

const coursesGrad = [
    {course: 'Intro to Human and Computer Interaction'},
    {course: 'Distributed Software Development'},
    {course: 'Foundations of Algorithms'},
];

const Courses = (props) => {
    let courses = null;
    if(props.undergrad) {
        courses = (
            coursesUndergrad.map(crs => (
                <Course key={crs.course} label={crs.course} />
            ))
        );
    }
    else {
        courses = (
            coursesGrad.map(crs => (
                <Course key={crs.course} label={crs.course} />
            ))
        );
    }

    return ( 
        <div className={classes.Courses}>
            {courses}
        </div>
    );
};
    

export default Courses;