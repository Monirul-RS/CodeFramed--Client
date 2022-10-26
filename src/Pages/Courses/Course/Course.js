import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CourseNav from '../../Shared/CourseNav/CourseNav';
import CourseSlide from '../../Shared/CourseSlide/CourseSlide';

const Course = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <Container className='mt-5'>
            <Row>
                <Col className='border' lg='3' >
                    <CourseNav></CourseNav>
                </Col>
                <Col lg='9'>
                    <div>
                        {
                            courses.map(course => <CourseSlide
                                key={course.id}
                                course={course}
                            ></CourseSlide>
                            )}
                    </div>
                </Col>
            </Row>
        </Container>

    );
};

export default Course;