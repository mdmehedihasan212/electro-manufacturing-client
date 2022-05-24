import React, { useEffect, useState } from 'react';

const AddReview = () => {
    const [reviews, setReviews] = useState('')

    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ reviews }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.clientSecret);
                if (data.clientSecret) {
                    setReviews(data.clientSecret)
                }
            });
    }, [reviews]);

    const handleReviewSubmit = event => {
        event.preventDefault();
    }

    return (
        <div>
            <h1>Add A Review</h1>
            <div class="hero min-h-screen">
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <h1 className='text-center mb-1'>Please select your ratings</h1>
                        <div class="rating justify-center mb-4">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div>
                        <form onSubmit={handleReviewSubmit}>
                            <input type="text" placeholder="Name" class="input input-bordered w-3/4 max-w-xs mb-3" />
                            <textarea type="textarea" class="textarea textarea-bordered w-3/4" placeholder="Description"></textarea>
                        </form>
                        <div class="mt-4">
                            <button class="btn btn-primary text-white">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;