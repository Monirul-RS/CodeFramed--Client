import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaFileDownload, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './CardDetails.css';
import Pdf from "react-to-pdf"





const ref = React.createRef();


const CardDetails = ({ course }) => {
    console.log(course);
    const { title, rating, img, total_class, details, class_duration, price, name } = course;


    return (

        <Card className="text-center bg-light shadow-lg text-black mt-5 mb-5">

            <Card.Header className='fs-4 fw-bold text-primary d-flex justify-content-between'>
                <div>
                    {name}
                </div>
                <div>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button onClick={toPdf}><FaFileDownload className='text-primary'></FaFileDownload></button>}
                    </Pdf>
                    <div ref={ref}>
                        <h6>Make Pdf</h6>
                    </div>

                </div>
            </Card.Header>
            <Card.Body>
                <Card.Img variant="top" src={img} />
                <Card.Title className='border rounded mt-1 text-primary p-1'>{title}</Card.Title>
                <Card.Text className='text-start'>
                    {details}
                </Card.Text>
                <h6 className='text-start'>Total Class: {total_class}</h6>
                <h6 className='text-start'>Class Duration: {class_duration}</h6>
                <div className='d-flex justify-content-between'>
                    <h6>Price: {price}</h6>
                    <Link to='/checkout'><Button variant="warning text-white fw-bold">Get Premium Access</Button></Link>
                </div>
            </Card.Body>
            <Card.Footer className="text-muted">
                <div className='text-start'>
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>{rating.number}</span>
                </div>
            </Card.Footer>
        </Card>

    );
};

export default CardDetails;