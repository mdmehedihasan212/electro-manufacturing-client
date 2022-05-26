import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import about from '../../assets/About/about.webp';

const About = () => {
    return (
        <div className="hero min-h-screen" style={{
            background: `url(${about})`,
            backgroundSize: 'cover'
        }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content uppercase">
                <div>
                    <h1 className="mb-2 text-sm lg:text-2xl animate__animated animate__fadeInDown animate__delay-0.5s">Welcome To</h1>
                    <h1 className="mb-1 text-4xl lg:text-7xl font-bold text-primary animate__animated animate__fadeInDown animate__delay-1s">Electro</h1>
                    <p className='mb-5 text-base lg:text-2xl max-w-3xl lowercase animate__animated animate__fadeInDown animate__delay-2s'>Our product portfolio is comprised of the most trusted brands and we offering the finest customer service. We offer top quality products at reasonable prices, provide unparalleled technical assistance, and back it all up with outstanding customer support.</p>
                    <button className='mt-5 btn btn-outline btn-primary sm:btn-sm md:btn-md lg:btn-lg rounded-none animate__animated animate__fadeInDown animate__delay-3s'>About Us</button>
                </div>
            </div>
        </div>
    );
};

export default About;