import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const ToolCard = ({ tool }) => {
    const { image, description, available_quantity, minimum_quantity, name, price } = tool;

    return (
        <div class="card shadow-2xl rounded-none">
            <figure><img className='w-3/4' src={image} alt="img" /></figure>
            <div class="p-8 text-center text-neutral">
                <h1 className='text-2xl'>Name: {name}</h1>
                <p className='text-lg'>Available Quantity: {available_quantity}</p>
                <p className='text-lg'>Minimum Quantity: {minimum_quantity}</p>
                <p className='text-lg'>Price: {price}</p>
                <p>Description: {description}</p>
                <div class="mt-2 justify-center">
                    <PrimaryButton>Buy Now</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ToolCard;