import React from 'react';

const Order = ({ order, index }) => {
    const { toolName, email, quantity } = order;

    const handleToDelete = () => {
        fetch(`http://localhost:5000/orders/${email}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    window.confirm(`Are you sure cancel your ${toolName} order`)
                }
                console.log(data);
            })
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
        </tr>
    );
};

export default Order;