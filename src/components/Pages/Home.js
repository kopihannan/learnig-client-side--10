import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'


const Home = () => {
    return (
        <div className='home-cover flex justify-center items-center'>
            <div className='text-center'>
                <h1 className='text-white uppercase text-5xl font-bold mb-7'>best online platform to learn courses</h1>
                <p className='text-slate-100 mb-8'>The online class provides a flexible and quick learning option. <br/> Its adaptability and efficiency made it more popular during the pandemic's early days</p>
                <Link className='bg-orange-500 py-2 px-8 font-medium text-white rounded mr-3 hover:bg-orange-600'>Get Start</Link>
                <Link to='/course' className=' py-2 px-8 font-medium text-orange-400 rounded border hover:bg-orange-600 hover:text-white'>Courses</Link>
            </div>
        </div>
    );
};

export default Home;