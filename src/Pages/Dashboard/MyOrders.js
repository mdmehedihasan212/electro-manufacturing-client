import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase/firebase.init';
import Loading from '../Shared/Loading';
import Order from './Order';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth);

    const { data: queryOrders, isLoading, refetch } = useQuery(['email'], () => fetch(`http://localhost:5000/order?email=${user.email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()))

    if (isLoading || loading) {
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
                            queryOrders?.map((order, index) => <Order
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