import React from 'react';
import banner from '../../assets/Banner/banner-1.webp';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div class="carousel min-h-screen w-full">
            <div id="slide1" class="carousel-item relative w-full">
                <div class="hero min-h-screen items-center text-center" style={{
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
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
                <div class="hero min-h-screen items-center text-center" style={{
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
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
                <div class="hero min-h-screen items-center text-center" style={{
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
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide4" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" class="carousel-item relative w-full">
                <div class="hero min-h-screen items-center text-center" style={{
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
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" class="btn btn-circle">❮</a>
                    <a href="#slide1" class="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;