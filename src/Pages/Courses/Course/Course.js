import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CourseNav from '../../Shared/CourseNav/CourseNav';

const Course = () => {
    return (
        <Container>
            <Row>
                <Col lg='3' >
                    <CourseNav></CourseNav>
                </Col>
                <Col lg='9'>
                    <h2>Courses</h2>
                </Col>
            </Row>
        </Container>
    );
};

export default Course;