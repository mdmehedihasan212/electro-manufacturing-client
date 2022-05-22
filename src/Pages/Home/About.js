import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import banner from '../../assets/Banner/banner-1.webp';

const About = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row gap-6">
                <img src={banner} class="w-2/4 h-screen shadow-2xl" alt='img' />
                <div>
                    <h1 class="text-5xl font-bold">Welcome To Electro</h1>
                    <p class="py-6 max-w-md">Our product portfolio is comprised of the most trusted brands and we offering the finest customer service. We offer top quality products at reasonable prices, provide unparalleled technical assistance, and back it all up with outstanding customer support.</p>
                    <PrimaryButton>About Us</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default About;