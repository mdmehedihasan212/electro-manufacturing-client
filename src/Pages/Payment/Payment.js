import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.STRIPE_SECRET_KEY);

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
                    <p>Please Pay: {paid.price}</p>
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