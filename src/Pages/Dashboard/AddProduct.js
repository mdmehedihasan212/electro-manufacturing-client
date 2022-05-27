import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {

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

        fetch("https://enigmatic-taiga-40573.herokuapp.com/add-product", {
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
        <div className="hero min-h-screen">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className='text-2xl mb-3 text-primary'>Add Product</h1>
                    <form onSubmit={handleSubmit} className="form-control">
                        <input type="text" name='name' placeholder='Name' className="input input-bordered mb-2" />
                        <input type="number" name='price' placeholder='Price' className="input input-bordered mb-2" />
                        <input type="number" name='availableQuantity' placeholder='Available Quantity' className="input input-bordered mb-2" />
                        <input type="number" name='minimumQuantity' placeholder='Minimum Quantity' className="input input-bordered mb-2" />
                        <input type="text" name='link' placeholder='Photo Link' className="input input-bordered mb-2" />
                        <textarea className="textarea textarea-bordered" name='description' placeholder='Description'></textarea>
                        <div className="form-control mt-3">
                            <button type='submit' className="btn btn-primary text-white">Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;