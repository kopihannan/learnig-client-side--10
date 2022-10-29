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
            <div className="navbar bg-base-100 navigation-menu py-3 bg-light shadow-lg px-24">
                <div className="flex-1">
                    <img className='w-11' src={logo} alt="" />
                    <Link to='/' className=" font-bold text-2xl text-orange-500">WEB STUDIO.</Link>
                </div>
                <div className=''>
                    <Link to='/course' className='btn btn-ghost font-semibold text-orange-500'>Courses</Link>
                    <Link className='btn btn-ghost font-semibold text-orange-500'>Blog</Link>
                    <Link className='btn btn-ghost font-semibold text-orange-500'>Faq</Link>
                    {
                        user?.email ? <div className='flex pr-4'>
                            <Link onClick={handleLogOut} className='btn btn-ghost font-semibold text-orange-500'>Logout</Link>
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
                        </div> : <Link to='/login' className='btn btn-ghost font-semibold text-orange-500'>Login</Link>
                    }

                </div>



                <div className="form-control">
                    <label className="label cursor-pointer">
                        <input type="checkbox" className="toggle toggle-primary" />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;