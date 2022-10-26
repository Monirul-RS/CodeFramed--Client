import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import RightSlide from '../RightSlide/RightSlide';

const Course = () => {
    return (
        <div className='mt-5'>
            <h1></h1>
            <Container>
                <Row>
                    <Col lg='6'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg='6'>
                        <RightSlide></RightSlide>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Course;