import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='mt-5'>
             <div className='mx-auto'>
                <h1 className='fw-bold  text-danger '>404! <span className='' > This page cannot be found!</span></h1>
                <h1 className=''>Go to the Home page <Link to='/'><button className='btn btn-info'>Home</button></Link></h1>
            </div>
        </div>
    );
};

export default ErrorPage;