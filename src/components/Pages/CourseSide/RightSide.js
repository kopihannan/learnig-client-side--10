import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RightSide = () => {
    const [catagory, setCatagory] = useState([]);

    useEffect(()=>{
        fetch('https://server-web-studio.vercel.app/categories')
        .then(rel => rel.json())
        .then(data => setCatagory(data))
    },[])
    return (
        <div className='py-20'>
            <h2 className='text-3xl font-bold pb-6 pl-2'>Category </h2>
            {
                catagory.map(c=> <p key={c.id}>
                    <Link className='btn btn-link' to={`/details/${c.id}`}>{c.title} </Link>
                </p>)
            }
        </div>
    );
};

export default RightSide;