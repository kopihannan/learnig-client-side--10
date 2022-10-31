import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';



const Checkout = () => {

    const data = useLoaderData();

    return (
        <div className='min-h-screen bg-base-200 flex justify-center'>
            <div className='bg-blue-200 p-10 rounded shadow-lg m-10'>
                <h2 className='text-4xl font-semibold text-orange-900'>{data.title}</h2>
                <hr/>
                <p className='py-10'>Price: </p>
                <Link className='btn btn-secondary'>Checkout</Link>
            </div>
        </div>
    );
};

export default Checkout;