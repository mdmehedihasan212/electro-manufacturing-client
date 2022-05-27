import React from 'react';
import image from '../../assets/Image/Photo Of Mehedi Hasan.jpg';

const MyPortfolio = () => {
    return (
        <div className="hero min-h-screen my-12 px-8">
            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 rounded-none">
                <div className="card w-full">
                    <div className="w-32 mx-auto rounded mt-8">
                        <img src={image} alt='img' />
                    </div>
                    <div className="card-body items-center text-center">
                        <h1 className='text-xl font-semibold'>Name: Md Mehedi Hasan</h1>
                        <p className='text-lg'>Email: mdmehedihasan384@gmail.com</p>
                        <p className='text-lg'>Institute: Islamic Arabic University, Dhaka.</p>
                        <p className='text-lg'>Educational Background: B.A (running)</p>
                        <p className='text-lg'>Skills : Javascript (basic)...read more</p>
                        <div className="card-actions">
                            <label htmlFor="my-modal-6" className="mt-5 btn btn-outline btn-primary sm:btn-sm md:btn-md lg:btn-lg rounded-none">Read More
                            </label>
                            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                            <div className="modal modal-bottom sm:modal-middle px-8">
                                <div className="modal-box">
                                    <h3 className="font-bold text-xl">My Skills As A Web Developer !</h3>
                                    <ul className='text-lg'>
                                        <p className='text-yellow-500 font-bold text-sm'>Note: All skills are basic knowledge</p>
                                        <li>Html5</li>
                                        <li>Css3</li>
                                        <li>Bootstrap</li>
                                        <li>Tailwind</li>
                                        <li>Javascript</li>
                                        <li>Modern Javascript ES6</li>
                                        <li>React</li>
                                        <li>React Router</li>
                                        <li>firebase</li>
                                        <li>Node</li>
                                        <li>Mongodb</li>
                                    </ul>
                                    <h3 className="font-bold text-xl">My Projects Live Website Links :</h3>

                                    <div className="items-center text-center">
                                        <label htmlFor="my-modal-6" className="mt-5 btn btn-outline btn-primary rounded-none">Thank You</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;