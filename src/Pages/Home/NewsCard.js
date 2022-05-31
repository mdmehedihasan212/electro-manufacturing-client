import React from 'react';

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
                    <label for="my-modal-6" class="mt-3 btn btn-outline btn-primary sm:btn-sm md:btn-md lg:btn-lg rounded-none hover:text-secondary">Read More</label>

                    <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                    <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box">
                            <h3 class="font-bold text-lg">{name}</h3>
                            <p class="py-4">{description}</p>
                            <div class="modal-action justify-center">
                                <label for="my-modal-6" class="mt-3 btn btn-outline btn-primary btn-md rounded-none hover:text-secondary">Thank You</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;