import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const { id } = useParams();
    const [paids, setPaids] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${id}`)
            .then(res => res.json())
            .then(data => {
                setPaids(data);
            })
    }, [id])

    return (
        <div>
            <h1>Payment: {paids.toolName}</h1>
        </div>
    );
};

export default Payment;