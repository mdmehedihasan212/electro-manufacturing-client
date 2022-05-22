import React from 'react';

const ToolCard = ({ tool }) => {
    const { image, description, available_quantity, minimum_quantity, name, price, _id } = tool;

    return (
        <div class="card w-96 shadow-2xl">
            <figure><img src={image} alt="img" /></figure>
            <div class="">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <div class="card-actions justify-center">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ToolCard;