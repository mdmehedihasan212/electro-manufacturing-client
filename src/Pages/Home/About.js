import React from 'react';
import about from '../../assets/About/about.png';

const About = () => {
    return (
        <div className="hero min-h-screen" style={{
            background: `url(${about})`,
            backgroundSize: 'cover'
        }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div data-aos="fade-up" className="hero-content text-center text-neutral-content uppercase">
                <div>
                    <h1 className="mb-2 text-sm lg:text-2xl">Welcome To</h1>
                    <h1 className="mb-1 text-4xl lg:text-7xl font-bold text-primary">Electro</h1>
                    <p className='mb-5 text-base lg:text-2xl max-w-3xl lowercase'>Our product portfolio is comprised of the most trusted brands and we offering the finest customer service. We offer top quality products at reasonable prices, provide unparalleled technical assistance, and back it all up with outstanding customer support.</p>
                    <button className='mt-5 btn btn-outline btn-primary sm:btn-sm md:btn-md lg:btn-lg rounded-none'>About Us</button>
                </div>
            </div>
        </div>
    );
};

export default About;