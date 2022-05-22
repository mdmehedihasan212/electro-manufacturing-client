import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button class="mt-5 btn btn-outline btn-primary sm:btn-sm md:btn-md lg:btn-lg rounded-none">{children}</button>
    );
};

export default PrimaryButton;