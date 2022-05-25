import React from 'react';
import image from '../../assets/Image/Photo Of Mehedi Hasan.jpg';
import PrimaryButton from '../Shared/PrimaryButton';

const MyPortfolio = () => {
    return (
        <div class="hero min-h-screen my-12">
            <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 rounded-none">
                <div class="card w-full">
                    <div class="w-32 mx-auto rounded mt-4">
                        <img src={image} alt='img' />
                    </div>
                    <div class="card-body items-center text-center">
                        <h1>Name: Md Mehedi Hasan</h1>
                        <p>Email: mdmehedihasan384@gmail.com</p>
                        <p>Institute: Islamic Arabic University,Dhaka.</p>
                        <p>Educational Background: B.A (running)</p>
                        <p>Skills :
                            <ul>
                                <li>Html5 (basic)</li>
                                <li>Css3 (basic)</li>
                                <li>Bootstrap (basic)</li>
                                <li>Tailwind (basic)</li>
                                <li>Javascript (basic)</li>
                                <li>Modern Javascript ES6 (basic)</li>
                                <li>React (basic)</li>
                                <li>React Router (basic)</li>
                                <li>firebase (basic)</li>
                                <li>Node (basic)</li>
                                <li>Mongodb (basic)</li>
                            </ul>
                        </p>
                        <p>My Projects Live Website Links:
                            <u>
                                <li></li>
                            </u>
                        </p>
                        <div class="card-actions">
                            <PrimaryButton>Contact Me</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;