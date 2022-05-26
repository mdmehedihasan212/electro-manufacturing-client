import React, { useEffect, useRef, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';
import GoogleLogin from './GoogleLogin';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const emailRef = useRef('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [
        sendPasswordResetEmail,
        sending,
        ResetError
    ] = useSendPasswordResetEmail(auth);

    const [token] = useToken(user);

    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (loading) {
        return <Loading></Loading>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };

    const handleResetPassword = async () => {
        const email = emailRef.current?.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Send Password Reset Email');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="hero min-h-screen">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className='text-4xl text-center text-primary mt-6'>Login</h1>
                        <div className="card-body">
                            <div className="form-control">
                                <input
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is required'
                                        },
                                        pattern: {
                                            value: /[A-Za-z]{3}/,
                                            message: 'Provide a valid email'
                                        }
                                    })}
                                    type="email"
                                    ref={emailRef}
                                    placeholder="Email"
                                    className="input input-bordered" />
                                <label className="label">
                                    {errors.email?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">{errors.email?.message}</span>
                                    }
                                    {errors.email?.type === 'pattern' &&
                                        <span className="label-text-alt text-red-500">{errors.email?.message}</span>
                                    }
                                </label>
                            </div>
                            <div className="form-control">
                                <input
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Password minimum 6 character'
                                        }
                                    })}
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered" />
                                <label className="label">
                                    {errors.password?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">{errors.password?.message}</span>
                                    }
                                    {errors.password?.type === 'minLength' &&
                                        <span className="label-text-alt text-red-500">{errors.password?.message}</span>
                                    }
                                </label>
                                <label className="label">
                                    <button onClick={handleResetPassword} className="link link-hover">Forgot password?</button>
                                </label>
                            </div>
                            <div className="form-control">
                                <input className="btn btn-primary text-white" type="submit" value="Login" />
                            </div>
                            <GoogleLogin></GoogleLogin>
                        </div>
                    </div>
                </div>
            </form >
        </div >
    );
};

export default Login;