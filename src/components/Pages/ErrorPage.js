import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center text-center mt-40'>
            <div className='my-auto'>
                <h1 className='text-9xl font-extrabold pb-7'>404</h1>
                <h3 className='text-xl font-medium'>Page Not Found</h3>
                <p className='font-medium pb-4'>The page you're looking does not seem to exit</p>
                <Link to='/' className='bg-green-500 text-white font-medium py-2 px-8 rounded hover:bg-green-700'>Go To Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;