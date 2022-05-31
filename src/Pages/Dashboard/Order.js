import React from 'react';
import { useNavigate } from 'react-router-dom';

const Order = ({ order, index, refetch }) => {
    const navigate = useNavigate();
    const { _id, toolName, price, quantity, email } = order;
    console.log(order);

    const handleToDelete = () => {
        fetch(`https://enigmatic-taiga-40573.herokuapp.com/orders/${email}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
            })
    }

    const handleToPaid = id => {
        navigate(`/payment/${id}`)
    }

    return (
        <tr className='text-center'>
            <th>{index + 1}</th>
            <td>{toolName}</td>
            <td>${price * quantity}</td>
            <td>{quantity} Pic</td>
            <td>
                <button
                    onClick={() => handleToDelete(_id)}
                    className="btn btn-error btn-sm text-white">
                    Cancel
                </button>
            </td>
            <td>
                {(price && !order.paid) && <button onClick={() => handleToPaid(_id)} className="btn btn-primary btn-sm text-white">Payment</button>}
                {(price && order.paid) && <button className="text-green-500" disabled>Pay</button>}
            </td>
        </tr>
    );
};

export default Order;