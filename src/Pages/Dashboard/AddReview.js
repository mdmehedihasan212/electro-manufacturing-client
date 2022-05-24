import React from 'react';
import { toast } from 'react-toastify';

const AddReview = () => {

    const handleSubmit = (event) => {
        event.preventDefault();

        const reviews = {
            name: event.target.name.value,
            description: event.target.description.value,
        }
        console.log(reviews);

        fetch("http://localhost:5000/review", {
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
            <h1>Add A Review</h1>
            <div class="hero min-h-screen">
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <form onSubmit={handleSubmit}>
                            <h1 className='text-center mb-1'>Please select your ratings</h1>
                            <div class="rating rating-md my-4">
                                <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div>
                                <input type="text" name='name' placeholder="Name" class="input input-bordered w-3/4 max-w-xs mb-3" />
                                <textarea name='description' class="textarea textarea-bordered w-3/4" placeholder="Description"></textarea>
                            </div>
                            <div class="mt-4">
                                <button type="submit" class="btn btn-primary text-white">Submit</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;