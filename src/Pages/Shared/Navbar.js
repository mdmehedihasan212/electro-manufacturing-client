import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import Loading from './Loading';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token')
        signOut(auth);
        navigate('/login')
    };

    const items =
        <>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/blogs'}>Blogs</Link></li>
            <li><Link to={'/portfolio'}>My Portfolio</Link></li>
            {user ?
                <>
                    <li><Link to={'/dashboard'}>Dashboard</Link></li>
                    <li><Link onClick={logout} to={'/'}>Sign Out</Link></li>
                </>
                :
                <>
                    <li><Link to={'/login'}>Login</Link></li>
                    <li><Link to={'/signup'}>Sign Up</Link></li>
                </>
            }

        </>

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 uppercase">
                        {items}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost uppercase text-base lg:text-2xl">Electro Manufacturing</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 uppercase">
                    {items}
                </ul>
            </div>
            <label htmlFor="my-drawer-2" tabIndex="0" className="navbar-end btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;