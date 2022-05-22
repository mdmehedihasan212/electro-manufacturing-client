import React from 'react';
import customer from '../../assets/Business Summary/customes.png'
import revenue from '../../assets/Business Summary/revenue.png'
import reviews from '../../assets/Business Summary/revews.png'
import tools from '../../assets/Business Summary/tools.png'

const BusinessSummary = () => {
    return (
        <div className='my-12'>
            <h1 className='text-4xl text-center'>Business Summary</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-2/3 mx-auto mt-12">

                <div class="stat">
                    <img className='w-1/2' src={customer} alt="img" />
                    <div class="stat-title">Customers</div>
                    <div class="stat-value">100+</div>
                    <div class="stat-desc">Jan 1st - May 1st</div>
                </div>

                <div class="stat">
                    <img className='w-1/2' src={revenue} alt="img" />
                    <div class="stat-title">Annual revenue</div>
                    <div class="stat-value">120M+</div>
                    <div class="stat-desc">Jan 1st - May 1st</div>
                </div>

                <div class="stat">
                    <img className='w-1/2' src={reviews} alt="img" />
                    <div class="stat-title"> Reviews</div>
                    <div class="stat-value">33K</div>
                    <div class="stat-desc">Jan 1st - May 1st</div>
                </div>

                <div class="stat">
                    <img className='w-1/2' src={tools} alt="img" />
                    <div class="stat-title">Tools</div>
                    <div class="stat-value">50+</div>
                    <div class="stat-desc">Jan 1st - May 1st</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;