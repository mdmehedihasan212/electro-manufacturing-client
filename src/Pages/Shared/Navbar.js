import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase/firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    const items =
        <>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/purchase/:id'}>Purchase</Link></li>
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
    return (
        <div class="navbar">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {items}
                    </ul>
                </div>
                <Link to={'/'} class="btn btn-ghost normal-case text-2xl">Electro Manufacturing</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {items}
                </ul>
            </div>
            <div class="navbar-end hidden lg:flex">
                <div class="form-control">
                    <label class="input-group">
                        <input type="text" placeholder="Search..." class="input input-bordered" /><button class="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;