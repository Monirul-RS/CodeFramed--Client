import { Col, Container, Row } from 'react-bootstrap';
import CardDetails from '../CardDetails/CardDetails';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const CourseDetails = () => {
   

    return (
        <Container>
            <Row>
                <Col lg='6'>
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg='6'>
                    <CardDetails></CardDetails>
                </Col>
            </Row>
        </Container>
    );
};

export default CourseDetails;