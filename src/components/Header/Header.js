import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/web studio.png'
import { AuthContext } from '../../Routes/UserContext';

const Header = () => {

    const { user, userLogout } = useContext(AuthContext);

    const handleLogOut = () => {
        userLogout()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    }

    return (
        <div>
            {/* new updata nabar */}
            <div className="navbar bg-slate-50 px-20 shadow-xl py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to='/course' className='btn btn-ghost font-bold text-blue-700'>Courses</Link>
                            <Link to='/blog' className='btn btn-ghost font-bold text-blue-700'>Blog</Link>
                            <Link className='btn btn-ghost font-bold text-blue-700'>Faq</Link>
                        </ul>
                    </div>
                    <div className=' sm:flex items-center'>
                        <img className='w-11 pr-2' src={logo} alt="" />
                        <Link to='/' className=" font-bold text-2xl text-blue-700">WEB STUDIO.</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <Link to='/course' className='btn btn-ghost font-bold text-blue-700'>Courses</Link>
                        <Link to='/blog' className='btn btn-ghost font-bold text-blue-700'>Blog</Link>
                        <Link className='btn btn-ghost font-bold text-blue-700'>Faq</Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.email ? <div className='flex pr-4'>
                            <Link onClick={handleLogOut} className='btn btn-ghost font-bold text-blue-700'>Logout</Link>
                            <div className="flex-none">
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom" data-tip={user?.displayName}>
                                        <div className="w-10 rounded-full">
                                            <img src={user?.photoURL
                                            } alt='' />
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div> : <Link to='/login' className='btn btn-ghost font-bold text-blue-700'>Login</Link>
                    }
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox" className="toggle toggle-primary" />
                        </label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;