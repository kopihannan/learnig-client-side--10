import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
const ref = React.createRef();



const DetailsPage = () => {

    const courses = useLoaderData()



    return (
        <div className='min-h-screen bg-base-200'>
            <div className='flex justify-end pr-24 py-4'>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button className='btn btn-warning font-medium' onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
            </div>
            <div className='min-h-screen bg-base-200 flex justify-center'>

                <div className='w-3/4 py-5' ref={ref}>
                    <img className='w-2/3 h-96 rounded m-auto' src={courses.image} alt="" />
                    <h2 className='py-4 text-5xl font-semibold text-orange-500'>{courses.title}</h2>
                    <p className='font-medium text-justify'>{courses.description}</p>
                    <div className='text-center py-10'>
                        <Link to={`/checkout/${courses.id}`} className='btn btn-success'> Premium Access</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DetailsPage;