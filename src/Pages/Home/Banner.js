import React from 'react';
import banner from '../../assets/Banner/banner-1.webp';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{
            background: `url(${banner})`,
            backgroundSize: 'cover'
        }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content uppercase">
                <div>
                    <small className='mb-5 text-xl'>Electro Manufacturing</small>
                    <h1 class="mb-1 text-7xl font-bold text-primary">Committed</h1>
                    <h2 className='mb-5 text-7xl'>To Super Quality</h2>
                    <p className='mb-5 text-2xl lowercase'>We won Many Industrial Awards and Got Many Certificates Since 2001-2016</p>
                    <PrimaryButton>Go to Shop</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;