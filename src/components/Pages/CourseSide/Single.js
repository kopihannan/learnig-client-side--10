import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Single = () => {

    const item = useLoaderData()
    console.log(item);

    return (
        <div className='min-h-screen bg-base-200 flex justify-center'>
            <div className='w-3/4 py-5'>
                <img className='w-2/3 h-96 rounded m-auto' src={item.image} alt=""/>
                <h2 className='py-4 text-5xl font-semibold text-orange-500'>{item.title}</h2>
                <p className='font-medium text-justify'>{item.description}</p>
            </div>
        </div>
    );
};

export default Single;