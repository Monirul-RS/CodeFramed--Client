import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './Login.css'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { FaGithub, FaGoogle, IconName } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';



const Login = () => {
    const [error, setError] = useState('')

    const { signIn, providerLogin, setLoading } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true});
                toast.success('Login Successfull');
            })
            .catch(error => {
                console.error(error);

            })
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true});
                toast.success('Login Successfully');
            })
            .catch(error =>
                console.error(error))
    }

    const handleSubmit = event => {

        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, {replace: true});
                toast.success("Login successfully")
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
            .finally( () =>{
                setLoading(false)
            })
    }
    return (
        <div className="login-container mt-12 ">
            <div className="login-title">
                Login
                {/* <BiLogInCircle /> */}
            </div>
            <form onSubmit={handleSubmit} className="login-form">
                <input name='email' type="text" placeholder="Your Email" required />
                <input name='password' type="password" placeholder="password" required />
                <p className='error-text'>{error}</p>
                <button>Login</button>
                <p>
                    Don't have an account? <Link className='text-decoration-none' to="/register">Sign up first</Link>
                </p>
            </form>
            <Button onClick={handleGoogleSignIn}>
                <FaGoogle className='me-1' /> Login via Google</Button>
            <Button onClick={handleGithubSignIn}>
                <FaGithub className='me-1' /> Login via Github</Button>
                <ToastContainer/>
        </div>

    );
};

export default Login;