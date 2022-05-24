import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import Order from './Order';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user, loading] = useAuthState(auth);

    const email = user?.email;
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [email])

    return (
        <div>
            <h1 className='text-2xl mt-6 mb-3'>My Orders: {orders.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead className='text-center'>
                        <tr>
                            <th></th>
                            <th>Tool Name</th>
                            <th>Email</th>
                            <th>Order</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <Order
                                key={order._id}
                                order={order}
                                index={index}
                            ></Order>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;