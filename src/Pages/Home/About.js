import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const About = () => {
    return (
        <div class="hero min-h-screen bg-primary-100">
            <div class="hero-content text-center">
                <div class="max-w-lg">
                    <h1 class="text-4xl lg:text-5xl font-bold">Welcome To Electro</h1>
                    <p class="py-6">Our product portfolio is comprised of the most trusted brands and we offering the finest customer service. We offer top quality products at reasonable prices, provide unparalleled technical assistance, and back it all up with outstanding customer support.</p>
                    <PrimaryButton>About Us</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default About;