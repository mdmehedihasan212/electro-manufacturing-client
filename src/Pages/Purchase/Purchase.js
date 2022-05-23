import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase/firebase.init';

const Purchase = () => {
    const { id } = useParams();
    const [tool, setTool] = useState({});
    const [increase, setIncrease] = useState(0)
    const [user, loading, error] = useAuthState(auth);

    const url = `http://localhost:5000/tools/${id}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTool(data)
            })
    }, [url])

    // const { isLoading, QueryError, data: tool } = useQuery('tool', () => fetch(url).then(res => res.json()))
    // console.log(tool);

    // if (loading || isLoading) {
    //     return;
    // }

    const handleToQuantity = (event) => {
        console.log(event);
    }

    return (
        <section class="hero min-h-screen">
            <div class="card lg:card-side bg-base-100 shadow-xl rounded-none">
                <figure>
                    <img className="border-4 p-2" src={tool.image} alt="img" />
                </figure>
                <div onClick={handleToQuantity} class="card-body items-center text-center">
                    <h2 class="card-title">{tool.name}</h2>
                    <p>{user.email}</p>
                    <p>Available Quantity: {tool.available_quantity}</p>
                    <p>Minimum Quantity: {tool.minimum_quantity}</p>
                    <p>Order Quantity: 0</p>
                    <div class="card-actions">
                        <button class="btn btn-sm btn-primary text-white">Increase Quantity</button>
                        <button class="btn btn-sm btn-primary text-white">Decrease Quantity</button>
                    </div>
                    <div class="card-actions">
                        <button class="btn btn-wide btn-primary text-white">Place Order</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Purchase;