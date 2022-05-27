import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase/firebase.init';
import Loading from '../Shared/Loading';
import Order from './Order';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth);

    const email = user?.email;
    const { data: orders, isLoading, refetch } = useQuery(['orders', email], () =>
        fetch(`https://enigmatic-taiga-40573.herokuapp.com/orders?email=${email}`).then(res => res.json()))

    if (loading || isLoading) {
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