import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/logo.png'
import { AuthContext } from '../../../Provider/AuthProvider';

const Navbar = () => {
    const {user, logout} = useContext(AuthContext)

    const handleLogout = () => {
            logout()
            .then(() => {})
    }

    const navItem = <div className='lg:flex items-center text-base font-semibold'>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link>Our Service</Link></li>
        <li><Link>Dashboard</Link></li>
        <li><Link>Contact Us</Link></li>
        <div className='md:ms-2'>
            {
                user ? <Link to={'/login'}><button onClick={handleLogout} className="btn bg-[#F73E7B]">Logout</button></Link> : <Link to={'/login'}><button className="btn bg-[#F73E7B]">Login</button></Link>
            }
        </div>
    </div>

    return (
        <div className="navbar bg-base-100 web-font max-w-screen-2xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><img className='w-28' src={logo} alt="" /></a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navItem}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;