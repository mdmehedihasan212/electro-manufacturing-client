import React from 'react';
import { toast } from 'react-toastify';

const Users = ({ user, index, authUser }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        const url = `https://enigmatic-taiga-40573.herokuapp.com/user/admin/${email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                toast(`Successfully Make Admin ${authUser.displayName}`)
            })
    }

    const removeUser = () => {
        const url = `https://enigmatic-taiga-40573.herokuapp.com/admin/${email}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast(`Successfully Delete ${authUser.displayName} `);
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{authUser.displayName}</td>
            <td>{user.email}</td>
            <td>
                {
                    role === 'admin' ?
                        <button className='btn btn-primary btn-sm text-white' disabled>Already Admin</button>
                        : <button onClick={makeAdmin} className='btn btn-primary btn-sm text-white'>Make Admin</button>
                }
            </td>
            <td>
                <button onClick={removeUser} className='btn btn-error btn-sm text-white'>Remove User</button>
            </td>
        </tr>
    );
};

export default Users;