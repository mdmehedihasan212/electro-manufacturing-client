import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import Loading from '../Shared/Loading';
import Users from './Users';

const MakeAdmin = () => {
    const [authUser, loading] = useAuthState(auth);
    const [users, setUsers] = useState([])

    useEffect(() => {
        const url = 'https://enigmatic-taiga-40573.herokuapp.com/user';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [])

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Name</th>
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
                                authUser={authUser}
                            ></Users>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;