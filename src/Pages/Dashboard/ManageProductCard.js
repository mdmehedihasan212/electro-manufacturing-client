import React from 'react';
import { toast } from 'react-toastify';

const ManageProductCard = ({ product, index }) => {
    const { _id, image, name, price } = product;

    const handleToDelete = () => {
        fetch(`https://enigmatic-taiga-40573.herokuapp.com/tools/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast(`Successfully Delete ${name} Item`);
                }
            })
    }

    return (
        <tr>
            <td className='font-bold'>{index + 1}</td>
            <td>
                <div className="avatar">
                    <div className="w-16 border-2">
                        <img src={image} alt="img" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>${price}</td>
            <td>
                <button
                    onClick={() => handleToDelete(_id)}
                    className="btn btn-error btn-sm text-white">
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default ManageProductCard;