import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Users from './Users';

const MakeAdmin = () => {

    const { data: users, isLoading, refetch } = useQuery(['users'], () =>
        fetch('http://localhost:5000/user').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(users);
    return (
        <div>
            <h1>Make Admin: {users.length}</h1>
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