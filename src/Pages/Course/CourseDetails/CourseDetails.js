import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const CourseDetails = () => {
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <Container>
            <Row>
                <Col lg='4'>
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col>



                </Col>
            </Row>
        </Container>
    );
};

export default CourseDetails;