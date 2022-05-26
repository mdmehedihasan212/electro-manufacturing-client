import React from 'react';

const WorkOutline = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 px-12 gap-4'>
            <div className="flex justify-center items-center w-96 bg-base-100 shadow-xl">
                <div className="avatar">
                    <div className="w-24 rounded-full ml-6">
                        <img src="https://api.lorem.space/image/face?hash=92310" alt='' />
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">Shipping Worldwide</h2>
                    <p>At vero eos accusam justo duo dolores rebum stet clita kasd gubergren.</p>
                </div>
            </div>
            <div className="flex justify-center items-center w-96 bg-base-100 shadow-xl">
                <div className="avatar">
                    <div className="w-24 rounded-full ml-6">
                        <img src="https://api.lorem.space/image/face?hash=92310" alt='' />
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">Shipping Worldwide</h2>
                    <p>At vero eos accusam justo duo dolores rebum stet clita kasd gubergren.</p>
                </div>
            </div>
            <div className="flex justify-center items-center w-96 bg-base-100 shadow-xl">
                <div className="avatar">
                    <div className="w-24 rounded-full ml-6">
                        <img src="https://api.lorem.space/image/face?hash=92310" alt='' />
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">Shipping Worldwide</h2>
                    <p>At vero eos accusam justo duo dolores rebum stet clita kasd gubergren.</p>
                </div>
            </div>
        </div>
    );
};

export default WorkOutline;