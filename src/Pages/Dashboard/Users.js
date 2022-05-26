import React from 'react';

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
                console.log(data);
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
                <button className='btn btn-error btn-sm text-white'>Remove User</button>
            </td>
        </tr>
    );
};

export default Users;