import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const CheckoutForm = ({ paid }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [method, setMethod] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    const { price } = paid;

    // const { data: clientSecret, isLoading, refatch } = useQuery(['clientSecret', price], () =>
    //     fetch('http://localhost:5000/create-payment-intent', {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     }).then(res => res.json())
    // )
    // console.log(clientSecret);

    // useEffect(() => {
    //     // Create PaymentIntent as soon as the page loads
    //     fetch("http://localhost:5000/create-payment-intent", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({ price }),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data.clientSecret);
    //             if (data.clientSecret) {
    //                 setClientSecret(data.clientSecret)
    //             }
    //         });
    // }, [price]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message);
            setMethod('')
        }
        else {
            setCardError('');
            setMethod(paymentMethod.message)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <p className='text-red-500 mt-2'>{cardError}</p>
            <p className='text-yellow-500 mt-2'>{method}</p>
            <div class="form-control mt-6">
                <button type="submit" disabled={!stripe || !clientSecret} class="btn btn-primary text-white">Payment</button>
            </div>
        </form>
    );
};

export default CheckoutForm;