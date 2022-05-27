import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../assets/404/404.png';

const NotFound = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-12">
                <img src={notFound} className="max-w-sm lg:max-w-xl" alt='img' />
                <div className="my-2 text-red-500 justify-center text-center">
                    <h1 className="text-6xl font-bold">404</h1>
                    <p className="text-xl">Page Not Found</p>
                    <p className="text-xl">The page you're looking for dosen't exist</p>
                    <Link to='/' className="btn btn-primary text-white mt-3">Back Homepage</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;