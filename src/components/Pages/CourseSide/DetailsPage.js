import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';



const DetailsPage = () => {

    const courses = useLoaderData()

 

    return (
        <div className='min-h-screen bg-base-200 flex justify-center'>
            <div className='w-3/4 py-5'>
                <img className='w-2/3 h-96 rounded m-auto' src={courses.image} alt="" />
                <h2 className='py-4 text-5xl font-semibold text-orange-500'>{courses.title}</h2>
                <p className='font-medium text-justify'>{courses.description}</p>
                <div className='text-center py-10'>
                    <Link  to={`/checkout/${courses.id}`} className='btn btn-info'>Get Premium Access</Link>
                </div>
            </div>
            
        </div>
    );
};

export default DetailsPage;