import React from 'react';
import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';


const CardDetails = () => {
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className='mt-5'>
            {
                courses.map(course => (
                    <Card style={{ width: '20rem' }} className="shadow-lg rounded text-start p-2 bg-dark text-white mt-4">
                        <Card.Img variant="top" src={course.img} />
                        <Card.Body>
                            <Card.Title className="text-center">{course.name}</Card.Title>
                            <Card.Text>
                                {course.details}
                            </Card.Text>
                            <p>Total CLass: {course.totalClass}</p>
                            <p>Class Duration: {course.classDuration}</p>
                            <span className='me-5'>Price: {course.price}</span>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                ))
            }


        </div>
    );
};

export default CardDetails;