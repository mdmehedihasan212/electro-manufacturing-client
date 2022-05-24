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
                    <h2 class="card-title text-primary">Tool Name: {paid.toolName}</h2>
                    <h2 class="card-title">Please Pay: {paid?.price}</h2>
                </div>
                <div class="card-body">
                    <h2 class="card-title text-primary mb-2">Card Details</h2>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;