import React from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './Login.css'


const Login = () => {
    return (
        <div className="login-container mt-12 ">
            <div className="login-title">
                Login
                {/* <BiLogInCircle /> */}
            </div>
            <form className="login-form">
                <input type="text" placeholder="Your Email" />
                <input type="password" placeholder="password" />
                <button>Login</button>
                <p>
                    Don't have an account? <Link className='text-decoration-none' to="/register">Sign up first</Link>
                </p>
            </form>
            <Button>Login via Google</Button>    
            <Button>Login via Github</Button>    
        </div>

    );
};

export default Login;