import React from 'react';

const ManageOrderCard = ({ order, index, refetch }) => {
    const { _id, toolName, price, quantity, email } = order;

    return (
        <tr className='text-center'>
            <th>{index + 1}</th>
            <td>{toolName}</td>
            <td>${price}</td>
            <td>{quantity} Pic</td>
            <td>
                <button className="btn btn-error btn-sm text-white">Cancel</button>
            </td>
            <td>
                <button className="btn btn-warning btn-sm text-white">Unpaid</button>
            </td>
        </tr>
    );
};

export default ManageOrderCard;