import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import Loading from '../Shared/Loading';
import Order from './Order';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            const url = `http://localhost:5000/orders?email=${user?.email}`;
            console.log(url);
            fetch(url)
                .then(res => res.json())
                .then(data => setOrders(data))
        } else {
            return <p>Sorry you have no orders</p>
        }
    }, [user])

    console.log(orders);

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead className='text-center'>
                        <tr>
                            <th></th>
                            <th>Tool Name</th>
                            <th>Price</th>
                            <th>Order</th>
                            <th>Action</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <Order
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