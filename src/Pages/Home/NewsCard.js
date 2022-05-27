import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const NewsCard = ({ news }) => {
    const { img, name, description } = news;

    return (
        <div className="card w-96 bg-base-100 shadow-2xl rounded-none">
            <figure className="px-8 pt-8 w-1/2 mx-auto">
                <img src={img} alt="img" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="text-xl font-bold">{name}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <PrimaryButton>Read More</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;