import React, { useEffect, useState } from 'react';
import './Courses.css'

const Courses = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='min-h-screen bg-slate-50 course'>
            <div className='grid grid-cols-2 gap-10 pl-24 pt-12'>
                {
                    products.map(product => <div>
                        <div className="card card-compact w-72 bg-base-100 shadow">
                            <figure><img className='w-full h-60' src={product.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.price}</h2>
                                <p>{product.title}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className='bg-lime-100 pt-12'>
                <h2 className='text-2xl font-bold text-blue-900'>Catagory</h2>
                <div>
                    <span></span>
                </div>
            </div>

        </div>
    );
};

export default Courses;