import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CardDetails from '../CardDetails/CardDetails';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const CourseDetails = () => {
    const courses = useLoaderData();

    return (
        <Container>
            <Row>
                <Col lg='6'>
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg='6'>
                    <div>
                        {
                            courses.map(course => <CardDetails
                            key={course._id}
                            course={course}
                            ></CardDetails>)
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CourseDetails;