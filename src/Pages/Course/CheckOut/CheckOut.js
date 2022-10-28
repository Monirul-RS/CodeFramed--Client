import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const CheckOut = () => {

  const courses = useLoaderData();
    return (
        <div>
            {
                courses.map(course =>(

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
    );
};

export default CheckOut;