import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideNav.css'

const LeftSideNav = () => {

    const [courses, setCourses] = useState([]);


    useEffect(() =>{
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data =>setCourses(data))
    }, [])
    return (
        <div className='me-5 mt-5 left-div'>
            <h1 className='text-start px-4 fw-bold text-primary'>Grab your course</h1>
            <div className='text-start border rounded course-div p-5 text-white fw-semibold'>
                {
                    courses.map(course => <li 
                    key={course.id}>
                    <Link className='text-decoration-none text-white fs-3' to={`/course/${course.id}`}>{course.name}</Link>
                    </li>)
                }                    
            </div>
        </div>
    );
};

export default LeftSideNav;