import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#home">CodeFramed</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Link className='text-white me-3 text-decoration-none' to='/'>Home</Link>
                        <Link className='text-white me-3 text-decoration-none' to='/course'>Course</Link>
                        <Link className='text-white me-3 text-decoration-none' to='/blog'>Blog</Link>
                        <Link className='text-white me-3 text-decoration-none' to='/faq'>FaQ</Link>
                        
                        <Link className='text-white me-3 text-decoration-none' to='/'>
                            {
                                user?.uid ?
                                    <>
                                        <Button onClick={handleLogOut}>Log Out</Button>
                                        <span>{user?.displayName}</span>
                                    </>
                                    :
                                    <>
                                        <Link className='text-white me-3 text-decoration-none' to='/login'>Login</Link>
                                        <Link className='text-white me-3 text-decoration-none' to='/Register'>Register</Link>

                                    </>
                            }
                        </Link>
                        <Link className='text-white me-3 text-decoration-none' to='/profile'>{user?.photoURL ?
                            <Image 
                            data-toggle="tooltip" data-placement="top" title={user.displayName}
                                style={{ height: '40px' }}
                                roundedCircle
                                src={user?.photoURL}
                            ></Image>
                            :
                            <FaUser></FaUser>
                        }</Link>




                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;