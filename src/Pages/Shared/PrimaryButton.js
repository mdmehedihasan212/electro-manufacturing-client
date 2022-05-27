import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className="mt-3 btn btn-outline btn-primary sm:btn-sm md:btn-md lg:btn-lg rounded-none hover:text-secondary">{children}</button>
    );
};

export default PrimaryButton;