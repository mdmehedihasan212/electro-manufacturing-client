import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.init';

const Purchase = () => {
    const { id } = useParams();
    const [tool, setTool] = useState({});
    const [quantity, setQuantity] = useState(40)
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const url = `http://localhost:5000/tools/${id}`;
    console.log(url);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTool(data)
            })
    }, [url])

    const handleSubmit = () => {
        const orders = {
            toolName: tool.name,
            email: user.email,
            availableQuantity: tool.available_quantity,
            minimumQuantity: tool.minimum_quantity,
            quantity: quantity
        }

        // orders post database
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('Successfully order submitted')
                navigate('/dashboard');
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
        <section class="hero min-h-screen">
            <div class="card lg:card-side bg-base-100 shadow-xl rounded-none">
                <figure>
                    <img className="border-4 p-2" src={tool.image} alt="img" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{tool.name}</h2>
                    <p>{user.email}</p>
                    <p>Available Quantity: {tool.available_quantity}</p>
                    <p>Minimum Quantity: {tool.minimum_quantity}</p>
                    <p>Quantity: {quantity}</p>
                    <div class="card-actions">
                        <button onClick={handleDecreaseQuantity} class="btn btn-sm btn-primary text-white">Decrease Quantity</button>
                        <button onClick={handleIncreaseQuantity} class="btn btn-sm btn-primary text-white">Increase Quantity</button>
                    </div>
                    <div class="card-actions">
                        <button onClick={handleSubmit} class="btn btn-wide btn-primary text-white">Place Order</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Purchase;