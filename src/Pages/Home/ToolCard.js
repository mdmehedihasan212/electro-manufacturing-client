import React from 'react';
import { useNavigate } from 'react-router-dom';

const ToolCard = ({ tool }) => {
    const navigate = useNavigate();

    const { _id, image, description, available_quantity, minimum_quantity, name, price } = tool;

    const handleToolsDetails = id => {
        navigate(`/purchase/${id}`)
    }

    return (
        <div className="card shadow-2xl rounded-none">
            <figure>
                <img className='w-1/2' src={image} alt="img" />
            </figure>
            <div className="p-6 text-center text-neutral">
                <h1 className='text-xl font-bold'>Name: {name}</h1>
                <p className='text-base'>Available Quantity: {available_quantity}</p>
                <p className='text-base'>Minimum Quantity: {minimum_quantity}</p>
                <p className='text-base'>Price: ${price}</p>
                <p>Description: {description}</p>
                <div className="mt-2 justify-center">
                    <button className='mt-5 btn btn-outline btn-primary sm:btn-sm md:btn-md lg:btn-lg rounded-none' onClick={() => handleToolsDetails(_id)}>Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default ToolCard;