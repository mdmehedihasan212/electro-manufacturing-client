import React from 'react';

const Users = ({ user, index }) => {
    console.log(user);

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>
                <button className='btn btn-sm'>Make Admin</button>
            </td>
            <td>
                <button className='btn btn-sm'>Remove User</button>
            </td>
        </tr>
    );
};

export default Users;