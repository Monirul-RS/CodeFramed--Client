import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const CourseNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then( data => setCourses(data))
    },[])


 
    return (
        <div>
            <h2 className='text-primary'>There are : {courses.length} courses</h2>
            <div  className="bg-primary p-5 rounded-4 text-dark bg-opacity-25 ">
                {
                    courses.map(course => <p key={course.id}>
                        <Link className='text-decoration-none fs-4' to={`/course/${course.id}`}>{course.name}</Link>
                    </p>)
                }
            </div>
          
            
        </div>
    );
};

export default CourseNav;