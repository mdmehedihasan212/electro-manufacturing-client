import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase/firebase.init';
import Loading from '../Shared/Loading';
import ManageOrderCard from './ManageOrderCard';

const ManageAllOrders = () => {
    const [user, loading] = useAuthState(auth);
    console.log(user);
    const { data: orders, isLoading } = useQuery(['orders'], () =>
        fetch('http://localhost:5000/orders').then(res => res.json()))

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
                            <th>Name</th>
                            <th>Price</th>
                            <th>Order</th>
                            <th>User</th>
                            <th>Action</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <ManageOrderCard
                                key={order._id}
                                order={order}
                                index={index}
                                user={user}
                            ></ManageOrderCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;