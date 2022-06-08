import React from 'react';

const PaymentHistoryRow = ({ payment, index }) => {
    const { toolName, email, transactionId, price } = payment;

    return (
        <tr className='text-center'>
            <th>{index + 1}</th>
            <td>{toolName}</td>
            <td>${price}</td>
            <td>{email}</td>
            <td>{transactionId}</td>
        </tr>
    );
};

export default PaymentHistoryRow;