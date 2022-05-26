import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.init';

const Purchase = () => {
    const { id } = useParams();
    const [tool, setTool] = useState({});
    const [quantity, setQuantity] = useState(40)
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        const url = `https://enigmatic-taiga-40573.herokuapp.com/tools/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTool(data)
            })
    }, [id])

    const handleSubmit = () => {
        const orders = {
            toolName: tool.name,
            price: tool.price,
            email: user.email,
            availableQuantity: tool.available_quantity,
            minimumQuantity: tool.minimum_quantity,
            quantity: quantity
        }

        // orders post database
        fetch('https://enigmatic-taiga-40573.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                toast('Successfully order submitted')
            })
    }

    const handleIncreaseQuantity = () => {
        if (quantity < 117)
            setQuantity(quantity + 1)
    }

    const handleDecreaseQuantity = () => {
        if (quantity > 40)
            setQuantity(quantity - 1)
    }

    return (
        <section className="hero min-h-screen">
            <div className="card lg:card-side bg-base-100 shadow-xl rounded-none">
                <figure>
                    <img className="border-4 p-2" src={tool.image} alt="img" />
                </figure>
                <div className="card-body items-center">
                    <h2 className="card-title">Name: {tool.name}</h2>
                    <p>Price: {tool.price}</p>
                    <p>Email: {user.email}</p>
                    <p>Available Quantity: {tool.available_quantity}</p>
                    <p>Minimum Quantity: {tool.minimum_quantity}</p>
                    <p>Order Quantity: {quantity}</p>
                    <div className="card-actions">
                        <button onClick={handleDecreaseQuantity} className="btn btn-sm btn-primary text-white">Decrease Quantity</button>
                        <button onClick={handleIncreaseQuantity} className="btn btn-sm btn-primary text-white">Increase Quantity</button>
                    </div>
                    <div className="card-actions">
                        <button onClick={handleSubmit} className="btn btn-wide btn-primary text-white">Place Order</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Purchase;