import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user, loading] = useAuthState(auth);

    const email = user?.email;
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [email])

    return (
        <div>
            <h1 className='text-2xl'>My Orders: {orders.length}</h1>
        </div>
    );
};

export default MyOrders;