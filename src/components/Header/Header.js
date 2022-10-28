import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/web studio.png'

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 navigation-menu py-3 bg-light shadow-lg px-24">
                <div className="flex-1">
                    <img className='w-11' src={logo} alt=""/>
                    <Link to='/' className=" font-bold text-2xl text-orange-500">WEB STUDIO.</Link>
                </div>
                <div className=''>
                    <Link className='btn btn-ghost font-semibold text-orange-500'>Courses</Link>
                    <Link className='btn btn-ghost font-semibold text-orange-500'>Blog</Link>
                    <Link className='btn btn-ghost font-semibold text-orange-500'>Faq</Link>
                    <Link to='/login' className='btn btn-ghost font-semibold text-orange-500'>Login</Link>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" alt='' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link>Settings</Link></li>
                            <li><Link>Logout</Link></li>
                        </ul>
                    </div>
                </div>


                <div className="form-control">
                    <label className="label cursor-pointer">
                        <input type="checkbox" className="toggle toggle-primary"  />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;