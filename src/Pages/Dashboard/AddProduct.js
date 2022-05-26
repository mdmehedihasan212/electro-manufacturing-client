import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.init';

const AddProduct = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleSubmit = (event) => {
        event.preventDefault();

        const products = {
            name: event.target.name.value,
            price: event.target.price.value,
            availableQuantity: event.target.availableQuantity.value,
            minimumQuantity: event.target.minimumQuantity.value,
            image: event.target.link.value,
            description: event.target.description.value,
        }

        fetch("http://localhost:5000/add-product", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(products),
        })
            .then((res) => res.json())
            .then((data) => {
                toast('Successfully Add Product')
            });
    }

    return (
        <div class="hero min-h-screen">
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <h1 className='text-2xl mb-3 text-primary'>Add Product</h1>
                    <form onSubmit={handleSubmit} class="form-control">
                        <input type="text" name='name' placeholder='Name' class="input input-bordered mb-2" />
                        <input type="number" name='price' placeholder='Price' class="input input-bordered mb-2" />
                        <input type="number" name='availableQuantity' placeholder='Available Quantity' class="input input-bordered mb-2" />
                        <input type="number" name='minimumQuantity' placeholder='Minimum Quantity' class="input input-bordered mb-2" />
                        <input type="text" name='link' placeholder='Photo Link' class="input input-bordered mb-2" />
                        <textarea class="textarea textarea-bordered" name='description' placeholder='Description'></textarea>
                        <div class="form-control mt-3">
                            <button type='submit' class="btn btn-primary text-white">Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;