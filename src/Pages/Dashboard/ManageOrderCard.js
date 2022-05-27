import React from 'react';
import { toast } from 'react-toastify';

const ManageOrderCard = ({ order, index, user, refetch }) => {
    const { _id, toolName, price, quantity, email } = order;

    const handleToDelete = () => {
        fetch(`https://enigmatic-taiga-40573.herokuapp.com/orders/${email}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast(`Successfully Delete ${toolName} Order By ${user.displayName}`);
                    refetch();
                }
            })
    }

    return (
        <tr className='text-center'>
            <th>{index + 1}</th>
            <td>{toolName}</td>
            <td>${price}</td>
            <td>{quantity} Pic</td>
            <td>{user.displayName}</td>
            <td>
                <button onClick={() => handleToDelete(_id)} className="btn btn-error btn-sm text-white">Cancel</button>
            </td>
            <td>
                <button className="btn btn-warning btn-sm text-white">Unpaid</button>
            </td>
        </tr>
    );
};

export default ManageOrderCard;