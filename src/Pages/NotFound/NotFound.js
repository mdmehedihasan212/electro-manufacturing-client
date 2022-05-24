import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../assets/404/404-1.webp';

const NotFound = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row gap-12">
                <img src={notFound} class="max-w-sm lg:max-w-xl" alt='img' />
                <div class="my-2 text-red-500 justify-center text-center">
                    <h1 class="text-6xl font-bold">404</h1>
                    <p class="text-xl">Page Not Found</p>
                    <p class="text-xl">The page you're looking for dosen't exist</p>
                    <Link to='/' class="btn btn-primary text-white mt-3">Back Homepage</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;