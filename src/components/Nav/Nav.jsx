import React from 'react';
import logo from '../../assets/nav/logo/logo.png'
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <nav className='flex md:flex-row flex-col md:gap-0 gap-8 items-center justify-between font-bold text-lg py-6 md:px-10 lg:px-32 bg-slate-100'>
            <div>
                <img src={logo} alt="website logo" />
            </div>
            <div className='flex md:flex-row flex-col text-center gap-4 md:gap-0'>
                <Link to='/'>HOME</Link>
                <Link to='/courses'>COURSES</Link>
                <Link to='/blog'>BLOG</Link>
                <Link to='/contact'>CONTACT</Link>
            </div>
            <div>
                <button className='bg-green-500 hover:bg-green-400 text-white py-4 px-6 shadow-lg shadow-green-300'>ADMIT NOW</button>
            </div>
        </nav>
    );
};

export default Nav;