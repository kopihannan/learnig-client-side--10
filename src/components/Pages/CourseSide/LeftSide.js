import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const LeftSide = () => {

    const [itm, setItm] = useState([])




    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(rel => rel.json())
            .then(data => setItm(data))
    }, [])

    return (
        <div className='min-h-screen bg-base-200 justify-center pl-24 gap-5 py-20 sm:grid grid-cols-2'>
            {
                itm.map(d => <div className='' key={d.id}>
                    <div className=''>
                        <div className="card card-compact my-6 w-80 bg-base-100 shadow-xl">
                            <figure><img className='w-80 h-52' src={d.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{d.title}</h2>
                                <h2 className="text-lg font-semibold">Price: ${d.price}</h2>
                                <div className="card-actions justify-between ">
                                    <Link className="btn btn-warning">View Details</Link>
                                    <Link className="btn btn-success">Buy Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default LeftSide;