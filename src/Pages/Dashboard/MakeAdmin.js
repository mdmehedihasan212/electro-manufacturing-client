import React, { useEffect, useState } from 'react';
import Users from './Users';

const MakeAdmin = () => {
    const [users, setUsers] = useState([])
    console.log(users);

    useEffect(() => {
        const url = 'http://localhost:5000/user';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUsers(data)
            })
    }, [])

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
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