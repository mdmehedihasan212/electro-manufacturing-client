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
        fetch(`http://localhost:5000/orders/${id}`)
            .then(res => res.json())
            .then(data => {
                setPaid(data);
            })
    }, [id])

    return (
        <div class="hero min-h-screen">
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <p>Tool Name: {paid.toolName}</p>
                    <p>Please Pay: {paid.price}</p>
                    <p class="card-title text-secondary mb-2">Card Details</p>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm paid={paid} />
                    </Elements>
                </div>

            </div>
        </div>
    );
};

export default Payment;