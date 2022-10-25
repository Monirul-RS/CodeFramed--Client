import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Link className='text-white me-3 text-decoration-none' to='/'>Home</Link>
                        <Link className='text-white me-3 text-decoration-none' to='/course'>Course</Link>
                        <Link className='text-white me-3 text-decoration-none' to='/blog'>Blog</Link>
                        <Link className='text-white me-3 text-decoration-none' to='/login'>Login</Link>
                        <Link className='text-white me-3 text-decoration-none' to='/Register'>Register</Link>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;