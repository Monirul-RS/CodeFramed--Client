import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardDetails = ({ course }) => {
    console.log(course);
    const {title, _id, img, total_class, details, class_duration, price, name } = course;


    return (
        <Card className="text-center bg-dark text-white">
            <Card.Header>{name}</Card.Header>
            <Card.Body>
            <Card.Img variant="top" src={img} />
                <Card.Title className='border rounded mt-1'>{title}</Card.Title>
                <Card.Text className='text-start'>
                    {details}
                </Card.Text>
                <h6 className='text-start'>Total Class: {total_class}</h6>
                <h6 className='text-start'>Class Duration: {class_duration}</h6>
                <div className='d-flex justify-content-between'>
                    <h6>Price: {price}</h6>
                    <Button variant="primary">Go somewhere</Button>
                </div>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default CardDetails;