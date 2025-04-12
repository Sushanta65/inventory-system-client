import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='w-full bg-blue-900 text-white p-5'>
            <h1>Navbar</h1>
            <Link to="/login">Login</Link>
        </div>
    );
};
export default Navbar;