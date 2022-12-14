import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './Main.css'

const Main = () => {

    return (
        <div>
            <nav className='main-header'>
                <Header></Header>
                <Outlet></Outlet>
            </nav>   
        </div>
    );
};

export default Main;