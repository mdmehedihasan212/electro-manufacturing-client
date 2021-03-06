import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageOrderCard from './ManageOrderCard';

const ManageAllOrders = () => {

    const { data: orders, isLoading, refetch } = useQuery(['orders'], () => fetch('https://enigmatic-taiga-40573.herokuapp.com/orders', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
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
                                refetch={refetch}
                            ></ManageOrderCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;