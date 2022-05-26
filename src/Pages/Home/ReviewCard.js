import React from 'react';

const ReviewCard = ({ userReview }) => {
    const { image, name, review } = userReview;

    return (
        <div className="card bg-base-100 shadow-xl rounded-none">
            <div className="avatar">
                <div className="w-24 mx-auto ring ring-primary rounded-full mt-4">
                    <img src={image} alt='img' />
                </div>
            </div>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{review}</p>

            </div>
        </div>
    );
};

export default ReviewCard;