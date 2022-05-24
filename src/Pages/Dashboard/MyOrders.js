import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase/firebase.init';
import Order from './Order';

const MyOrders = () => {
    // const [orders, setOrders] = useState([]);
    const [user, loading] = useAuthState(auth);

    const email = user?.email;
    const { data: orders, isLoading, refetch } = useQuery(['orders', email], () =>
        fetch(`http://localhost:5000/orders?email=${email}`).then(res =>
            res.json()
        )
    )

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead className='text-center'>
                        <tr>
                            <th></th>
                            <th>Tool Name</th>
                            <th>Email</th>
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
                                refetch={refetch}
                            ></Order>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;