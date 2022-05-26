import React, { useEffect, useState } from 'react';
import Users from './Users';

const MakeAdmin = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const url = 'https://enigmatic-taiga-40573.herokuapp.com/user';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [])

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <Users
                                key={user._id}
                                user={user}
                                index={index}
                            ></Users>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;