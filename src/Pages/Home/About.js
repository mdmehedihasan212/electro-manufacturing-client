import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import banner from '../../assets/Banner/banner-1.webp';

const About = () => {
    return (
        // <div class="hero min-h-screen bg-primary-100">
        //     <div class="hero-content text-center">
        //         <div class="">
        //             <h1 class=""></h1>
        //             <p class="py-6"></p>
        //             <PrimaryButton></PrimaryButton>
        //         </div>
        //     </div>
        // </div>

        <div class="hero min-h-screen" style={{
            background: `url(${banner})`,
            backgroundSize: 'cover'
        }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content uppercase">
                <div>
                    <h1 class="mb-1 text-3xl lg:text-4xl font-bold">Welcome</h1>
                    <h1 class="mb-3 text-4xl lg:text-6xl">To Electro</h1>
                    <p className='mb-5 text-xl lg:text-2xl max-w-4xl lowercase'>Our product portfolio is comprised of the most trusted brands and we offering the finest customer service. We offer top quality products at reasonable prices, provide unparalleled technical assistance, and back it all up with outstanding customer support.</p>
                    <PrimaryButton>About Us</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default About;