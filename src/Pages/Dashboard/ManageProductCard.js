import React from 'react';
import { toast } from 'react-toastify';

const ManageProductCard = ({ product, index }) => {
    const { _id, image, name, price } = product;
    console.log(product);

    const handleToDelete = () => {
        fetch(`http://localhost:5000/tools/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log(data);
                }
            })
    }

    return (
        <tr>
            <td className='font-bold'>{index + 1}</td>
            <td>
                <div class="avatar">
                    <div class="w-16 rounded ring ring-primary">
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