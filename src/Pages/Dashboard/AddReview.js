import React from 'react';
import { toast } from 'react-toastify';

const AddReview = () => {

    const handleSubmit = (event) => {
        event.preventDefault();

        const reviews = {
            image: event.target.link.value,
            name: event.target.name.value,
            review: event.target.review.value,
        }
        console.log(reviews);

        fetch("https://enigmatic-taiga-40573.herokuapp.com/review", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reviews),
        })
            .then((res) => res.json())
            .then((data) => {
                toast('Successfully review submitted')
            });
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <h1 className='text-xl text-primary text-center mb-1'>Please select your ratings</h1>
                            <div className="rating rating-md my-4">
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div>
                                <input type="text" name='link' placeholder='Photo Link' className="input input-bordered w-3/4 max-w-xs mb-3" />
                                <input type="text" name='name' placeholder="Name" className="input input-bordered w-3/4 max-w-xs mb-3" />
                                <textarea type="text" name='review' className="textarea textarea-bordered w-3/4" placeholder="Description"></textarea>
                            </div>
                            <div className="mt-4">
                                <button type="submit" className="btn btn-primary text-white">Submit</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;