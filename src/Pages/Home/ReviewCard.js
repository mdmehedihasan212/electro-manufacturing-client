import React from 'react';

const ReviewCard = ({ userReview }) => {
    const { image, name, review } = userReview;

    return (
        <div class="card bg-base-100 shadow-xl rounded-none">
            <div class="avatar">
                <div class="w-24 mx-auto rounded-xl">
                    <img src={image} alt='img' />
                </div>
            </div>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{review}</p>

            </div>
        </div>
    );
};

export default ReviewCard;