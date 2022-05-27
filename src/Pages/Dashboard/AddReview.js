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

        fetch("https://enigmatic-taiga-40573.herokuapp.com/review", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reviews),
        })
            .then((res) => res.json())
            .then((data) => {
                toast('Successfully Submitted Your Review')
            });
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <h1 className='text-xl text-primary text-center mb-1'>Please select your ratings</h1>
                            <div className="rating my-4">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" />
                            </div>
                            <div>
                                <input type="text" name='link' placeholder='Photo Link' className="input input-bordered w-full max-w-xs mb-3" required /><input type="text" name='name' placeholder="Name"
                                    className="input input-bordered w-full max-w-xs mb-3" required />
                                <textarea type="text" name='review' className="textarea textarea-bordered w-full" placeholder="Write your review" required></textarea>
                            </div>
                            <div>
                                <button type="submit" className="mt-4 btn btn-primary text-white w-1/2">Submit</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;