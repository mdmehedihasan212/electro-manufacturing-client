import React from 'react';

const NewsCard = ({ news }) => {
    const { img, name, description } = news;

    return (
        <div data-aos="flip-up" className="card w-96 bg-base-100 shadow-2xl rounded-none">
            <figure className="px-8 pt-8 w-1/2 mx-auto">
                <img src={img} alt="img" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="text-xl font-bold">{name}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <button className="mt-3 btn btn-outline btn-primary sm:btn-sm md:btn-md lg:btn-lg rounded-none hover:text-secondary">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;