import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AuthLayout = () => {
    return (
        <div className='container mx-auto pt-5'>
            <section>
            <Navbar></Navbar>
            </section>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;