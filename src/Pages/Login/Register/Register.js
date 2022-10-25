import React from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './Register.css'

const Register = () => {
    return (
        <div className="register-container mt-12  ">
            <div className="register-title">
               Create Account             
            </div>
            <form className="register-form">
                <input type="text" placeholder="Enter Name"  />
                <input type="text" placeholder="Enter Photo URL" />
                <input type="text" placeholder="Enter Email" required />
                <input type="password" placeholder="Enter password" required />
                <button>Register</button>
                <p>
                    Already have an account? <Link className='text-decoration-none' to="/login">Login</Link>
                </p>
            </form>
            <Button>Google</Button>
            <Button>Github</Button>
        </div>
    );
};

export default Register;