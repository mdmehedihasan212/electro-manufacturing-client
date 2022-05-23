import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase/firebase.init';

const Purchase = () => {
    const { id } = useParams();
    const [user, loading, error] = useAuthState(auth);

    const url = `http://localhost:5000/tools/${id}`;
    const { isLoading, QueryError, data: tool } = useQuery('tool', () => fetch(url).then(res => res.json()))
    console.log(tool);

    if (loading || isLoading) {
        return;
    }

    return (
        <section class="hero min-h-screen">
            <div class="card lg:card-side bg-base-100 shadow-xl rounded-none">
                <figure>
                    <img className="border-2" src={tool.image} alt="img" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{tool.name}</h2>
                    <p>{user.email}</p>
                    <p>available_quantity: {tool.available_quantity}</p>
                    <p>minimum_quantity: {tool.minimum_quantity}</p>
                    <p>order_quantity: 0</p>

                    <div class="card-actions">
                        <button class="btn btn-primary">Increase</button>
                        <button class="btn btn-primary">Decrease</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Purchase;