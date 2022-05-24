import React from 'react';
import { useNavigate } from 'react-router-dom';

const Order = ({ order, index, refetch }) => {
    const { _id, toolName, email, quantity, price } = order;
    const navigate = useNavigate();

    const handleToDelete = () => {
        fetch(`http://localhost:5000/orders/${email}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    window.confirm(`Are you sure cancel your ${toolName} order`)
                }
                refetch()
                console.log(data);
            })
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
                <button onClick={handleToDelete} class="btn btn-sm">Cancel</button>
            </td>
            <td>
                <button onClick={() => handleToPaid(_id)} class="btn btn-sm">Paid</button>
            </td>
        </tr>
    );
};

export default Order;