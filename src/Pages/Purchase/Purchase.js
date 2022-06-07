import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.init';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const { id } = useParams();
    const [tool, setTool] = useState({});
    const [quantity, setQuantity] = useState(0)
    const [inputOrder, setInPutOrder] = useState(0)
    const [user, loading] = useAuthState(auth);

    const { name, price, image, available_quantity, minimum_quantity } = tool || {};
    console.log(tool);

    useEffect(() => {
        const url = `http://localhost:5000/tools/${id}`;
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                setTool(data)
            })
    }, [id])

    const handleSubmit = () => {
        const orders = {
            toolName: name,
            price: price,
            email: user.email,
            availableQuantity: available_quantity,
            minimumQuantity: minimum_quantity,
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

    const handleInputOrder = (event) => {
        setInPutOrder(event.target.value);
        setQuantity(inputOrder + 1);
    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <section className="hero min-h-screen">
            <div className="card lg:card-side bg-base-100 shadow-xl rounded-none">
                <figure>
                    <img src={image} alt="img" />
                </figure>
                <div className="card-body items-center">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Per Price: ${price}</p>
                    <p>Total Price: ${price * inputOrder}</p>
                    <p>Available Quantity: {available_quantity}</p>
                    <p>Minimum Quantity: {minimum_quantity}</p>
                    <p>Order Quantity: {inputOrder}</p>
                    <div className="card-actions">
                        <input onChange={handleInputOrder} value={inputOrder} type="text" placeholder="Type here order quantity..." className="input input-bordered w-full max-w-xs" />
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