import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.init';
import Loading from '../Shared/Loading';

const ManageOrderCard = ({ order, index, refetch }) => {
    const [logUser, loading] = useAuthState(auth);
    const { _id, user, toolName, price, quantity, email } = order;

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
                    toast(`Successfully Delete ${toolName} Order By ${logUser.displayName}`);
                    refetch();
                }
            })
    }

    if (loading) {
        return <Loading></Loading>
    }


    return (
        <tr className='text-center'>
            <th>{index + 1}</th>
            <td>{toolName}</td>
            <td>${price}</td>
            <td>{quantity - 1} Pic</td>
            <td>{user}</td>
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