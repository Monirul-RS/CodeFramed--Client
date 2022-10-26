import React from 'react';
import { Form, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './Register.css'
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';

const Register = () => {

    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext)

 

    const handleSubmit = event =>{
        event.preventDefault();
        
        
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoURL, email, password)

        createUser(email, password)
        .then( result =>{
            const user = result.user;
            form.reset();
            console.log(user);
            setError('');
        })
        .catch(error =>{
            console.error(error);
            setError(error.message);
        })


    }
    return (
        <div className="register-container mt-12  ">
            <div className="register-title">
               Create Account             
            </div>
            <form onSubmit={handleSubmit} className="register-form">
                <input name='name' type="text" placeholder="Enter Name"  />
                <input name='photoURL' type="text" placeholder="Enter Photo URL" />
                <input name='email' type="text" placeholder="Enter Email" required />
                <input name='password' type="password" placeholder="Enter password" required  />
                <p className='error-text'>{error}</p>
                <button>Register</button>
                <p>
                    Already have an account? <Link className='text-decoration-none' to="/login">Login</Link>
                </p>
            </form>
            
        </div>
       
    );
};

export default Register;