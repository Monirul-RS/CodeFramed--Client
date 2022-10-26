import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import homeImg from '../../../assets/Images/login.jpg'
import './Home.css'

const Home = () => {


    return (

        <div className=' home'>
            <Container>
                <Row>
                    <Col md="6" >
                        <div className='text-start home-div '>
                            <h2 className='fw-bold fs-1'>Welcome to <br /><span className='text-info'>CodeFramed</span> website.</h2>
                            <p>Start, switch, or advance your career with more than <br /> 5,200 courses, Professional Certificates, and degrees <br /> from world-class universities and companies.</p>
                            <Link to='/course'><Button className='btn btn-info text-white fw-semibold'>Visit Courses
                                <FaCartPlus className='ms-2'></FaCartPlus>
                            </Button></Link>
                        </div>

                    </Col>
                    <Col md="6">
                        <div className='img'>
                            <img src={homeImg} className="w-100 ms-5 mt-5" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default Home;