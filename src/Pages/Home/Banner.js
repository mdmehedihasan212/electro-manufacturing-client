import React from 'react';
import banner1 from '../../assets/Banner/banner-1.png';
import banner2 from '../../assets/Banner/banner-2.png';
import banner3 from '../../assets/Banner/banner-3.png';
import banner4 from '../../assets/Banner/banner-4.png';

const Banner = () => {
    return (
        <div className="carousel min-h-screen w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="hero min-h-screen items-center text-center" style={{
                    background: `url(${banner1})`,
                    backgroundSize: 'cover'
                }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div data-aos="fade-up" className="hero-content text-center text-neutral-content uppercase">
                        <div>
                            <small className='mb-5 text-xs lg:text-xl'>Electro Manufacturing</small>
                            <h1 className="mb-1 text-4xl lg:text-7xl font-bold text-primary">Committed</h1>
                            <h2 className='mb-5 text-4xl lg:text-7xl'>To Super Quality</h2>
                            <p className='mb-5 text-base lg:text-2xl lowercase'>We won Many Industrial Awards and Got Many Certificates Since 2001-2016</p>
                            <button className='mt-5 btn btn-outline btn-primary sm:btn-sm md:btn-md lg:btn-lg rounded-none'>Go to Shop</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className="hero min-h-screen items-center text-center" style={{
                    background: `url(${banner2})`,
                    backgroundSize: 'cover'
                }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div data-aos="fade-up" className="hero-content text-center text-neutral-content uppercase">
                        <div>
                            <small className='mb-5 text-xs lg:text-xl'>Electro Manufacturing</small>
                            <h1 className="mb-1 text-4xl lg:text-7xl font-bold text-primary">Committed</h1>
                            <h2 className='mb-5 text-4xl lg:text-7xl'>To Super Quality</h2>
                            <p className='mb-5 text-base lg:text-2xl lowercase'>We won Many Industrial Awards and Got Many Certificates Since 2001-2016</p>
                            <button className='mt-5 btn btn-outline btn-primary sm:btn-sm md:btn-md lg:btn-lg rounded-none'>Go to Shop</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className="hero min-h-screen items-center text-center" style={{
                    background: `url(${banner3})`,
                    backgroundSize: 'cover'
                }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div data-aos="fade-up" className="hero-content text-center text-neutral-content uppercase">
                        <div>
                            <small className='mb-5 text-xs lg:text-xl'>Electro Manufacturing</small>
                            <h1 className="mb-1 text-4xl lg:text-7xl font-bold text-primary">Committed</h1>
                            <h2 className='mb-5 text-4xl lg:text-7xl'>To Super Quality</h2>
                            <p className='mb-5 text-base lg:text-2xl lowercase'>We won Many Industrial Awards and Got Many Certificates Since 2001-2016</p>
                            <button className='mt-5 btn btn-outline btn-primary sm:btn-sm md:btn-md lg:btn-lg rounded-none'>Go to Shop</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className="hero min-h-screen items-center text-center" style={{
                    background: `url(${banner4})`,
                    backgroundSize: 'cover'
                }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div data-aos="fade-up" className="hero-content text-center text-neutral-content uppercase">
                        <div>
                            <small className='mb-5 text-xs lg:text-xl'>Electro Manufacturing</small>
                            <h1 className="mb-1 text-4xl lg:text-7xl font-bold text-primary">Committed</h1>
                            <h2 className='mb-5 text-4xl lg:text-7xl'>To Super Quality</h2>
                            <p className='mb-5 text-base lg:text-2xl lowercase'>We won Many Industrial Awards and Got Many Certificates Since 2001-2016</p>
                            <button className='mt-5 btn btn-outline btn-primary sm:btn-sm md:btn-md lg:btn-lg rounded-none'>Go to Shop</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;