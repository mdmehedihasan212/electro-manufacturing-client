import React from 'react';
import { useNavigate } from 'react-router-dom';

const Order = ({ order, index, refetch }) => {
    const { _id, toolName, email, quantity, price } = order;
    const navigate = useNavigate();

    const handleToDelete = () => {
        fetch(`https://enigmatic-taiga-40573.herokuapp.com/orders/${email}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    const handleToPaid = id => {
        navigate(`/payment/${id}`)
    }

    return (
        <tr className='text-center'>
            <th>{index + 1}</th>
            <td>{toolName}</td>
            <td>{email}</td>
            <td>{quantity} Pic</td>
            <td>
                <button onClick={() => handleToDelete} class="btn btn-error btn-sm text-white">Cancel</button>
            </td>
            <td>
                <button onClick={() => handleToPaid(_id)} class="btn btn-primary btn-sm text-white">Payment</button>
            </td>
        </tr>
    );
};

export default Order;