import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L14KjAQv1S3Cord0vDrT20jYMa3eYBQSBilQWwbqEyzfWXHTyxdBiR80ii7WQdW3JBPjKKtnI4HB2P9RMBQsyNA00fqQLFUas');

const Payment = () => {
    const { id } = useParams();
    const [paid, setPaid] = useState({})

    useEffect(() => {
        fetch(`https://enigmatic-taiga-40573.herokuapp.com/orders/${id}`)
            .then(res => res.json())
            .then(data => {
                setPaid(data);
            })
    }, [id])

    return (
        <div className="hero min-h-screen">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <p>Tool Name: {paid.toolName}</p>
                    <p>Please Pay: ${paid.price * paid.quantity}</p>
                    <p className="card-title text-secondary mb-2">Card Details</p>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm paid={paid} />
                    </Elements>
                </div>

            </div>
        </div>
    );
};

export default Payment;