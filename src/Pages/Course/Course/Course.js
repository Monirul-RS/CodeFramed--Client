import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import RightSlide from '../RightSlide/RightSlide';

const Course = () => {
    return (
        <div className='mt-5'>

            <Container>
                <Row>
                    <Col lg='4'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg='8'>
                        <RightSlide></RightSlide>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Course;