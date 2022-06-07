import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import PaymentHistoryRow from './PaymentHistoryRow';

const PaymentHistory = () => {
    const { data: payments, isLoading, refetch } = useQuery(['orders'], () => fetch('http://localhost:5000/payment').then(res => res.json()))

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
                            <th>Email</th>
                            <th>TransactionId</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments?.map((payment, index) => <PaymentHistoryRow
                                key={payment._id}
                                payment={payment}
                                index={index}
                                refetch={refetch}
                            ></PaymentHistoryRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;