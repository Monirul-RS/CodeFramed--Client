import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './RightSlide.css'

const RightSlide = () => {
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        fetch('https://learning-platform-assignment-server-cyan.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className='mb-5 ms-5 mt-5 me-5 mx-auto  '>
            <div className='course-det'>
                {
                    courses.map(course => (

                        <Card style={{ width: '18rem' }} className="box mt-4 grid card-width shadow-lg">
                            <Card.Img variant="top" src={course.img} />
                            <Card.Body className='d-flex justify-content-between'>
                                <Card.Title>{course.name}</Card.Title>
                                <Link to={`/course/${course.id}`}><Button variant="primary">Details</Button></Link>
                            </Card.Body>
                        </Card>

                    ))
                }
            </div>
        </div>
    );
};



export default RightSlide;