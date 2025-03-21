import React from 'react';
import Navbar from './HomePage/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './HomePage/Footer';

const Root = () => {
    return (
        <div className='w-full mx-auto bg-white'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;