import React from 'react';
import { GrDeliver } from 'react-icons/gr';
import { FaUserFriends } from 'react-icons/fa';
import { BsFillCreditCardFill } from 'react-icons/bs';

const WorkOutline = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12 mb-8 gap-4'>
            <div data-aos="flip-left" className="flex justify-center items-center w-96 bg-base-100 shadow-xl">
                <GrDeliver className='w-1/2 h-1/2 ml-6'></GrDeliver>
                <div className="card-body">
                    <h2 className="card-title">SHIPPING WORLDWIDE</h2>
                    <p>At vero eos accusam justo duo dolores rebum stet clita kasd gubergren.</p>
                </div>
            </div>
            <div data-aos="flip-left" className="flex justify-center items-center w-96 bg-base-100 shadow-xl">
                <FaUserFriends className='w-1/2 h-1/2 ml-6'></FaUserFriends>
                <div className="card-body">
                    <h2 className="card-title">PARTNERSHIP PROGRAM</h2>
                    <p>No sea takimata sanctus est Lorem ipsum dolor sit amet lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div data-aos="flip-left" className="flex justify-center items-center w-96 bg-base-100 shadow-xl">
                <BsFillCreditCardFill className='w-1/2 h-1/2 ml-6'></BsFillCreditCardFill>
                <div className="card-body">
                    <h2 className="card-title">DISCOUNTS AND SALE</h2>
                    <p>Consetetur sacing elited diam nonumy eirmod tempor invidunt ut labore et.</p>
                </div>
            </div>
        </div>
    );
};

export default WorkOutline;