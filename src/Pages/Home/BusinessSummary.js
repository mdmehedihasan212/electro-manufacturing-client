import React from 'react';
import customer from '../../assets/Business Summary/customes.png'
import revenue from '../../assets/Business Summary/revenue.png'
import reviews from '../../assets/Business Summary/revews.png'
import tools from '../../assets/Business Summary/tools.png'

const BusinessSummary = () => {
    return (
        <div className='my-12'>
            <h1 className='text-4xl text-center'>Business Summary</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 w-full mx-auto mt-12">

                <div className="items-center text-center">
                    <img className='w-8 lg:w-12 mx-auto' src={customer} alt="img" />
                    <div>Customers</div>
                    <div className="text-5xl lg:text-6xl font-bold">100+</div>
                    <div>Jan 1st - May 1st</div>
                </div>

                <div className="items-center text-center">
                    <img className='w-8 lg:w-12 mx-auto' src={revenue} alt="img" />
                    <div>Annual revenue</div>
                    <div className="text-5xl lg:text-6xl font-bold">120M+</div>
                    <div>Jan 1st - May 1st</div>
                </div>

                <div className="items-center text-center">
                    <img className='w-8 lg:w-12 mx-auto' src={reviews} alt="img" />
                    <div> Reviews</div>
                    <div className="text-5xl lg:text-6xl font-bold">33K</div>
                    <div>Jan 1st - May 1st</div>
                </div>

                <div className="items-center text-center">
                    <img className='w-8 lg:w-12 mx-auto' src={tools} alt="img" />
                    <div>Tools</div>
                    <div className="text-5xl lg:text-6xl font-bold">50+</div>
                    <div>Jan 1st - May 1st</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;