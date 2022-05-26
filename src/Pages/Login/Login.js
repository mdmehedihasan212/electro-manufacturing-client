import { async } from '@firebase/util';
import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link as p, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';
import GoogleLogin from './GoogleLogin';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [email, setEmail] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
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
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="hero min-h-screen">
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className='text-4xl text-center text-primary mt-6'>Login</h1>
                        <div class="card-body">
                            <div class="form-control">
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
                                    onChange={(event) => setEmail(event.target.value)}
                                    placeholder="Email"
                                    class="input input-bordered" />
                                <label class="label">
                                    {errors.email?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">{errors.email?.message}</span>
                                    }
                                    {errors.email?.type === 'pattern' &&
                                        <span className="label-text-alt text-red-500">{errors.email?.message}</span>
                                    }
                                </label>
                            </div>
                            <div class="form-control">
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
                                    class="input input-bordered" />
                                <label class="label">
                                    {errors.password?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">{errors.password?.message}</span>
                                    }
                                    {errors.password?.type === 'minLength' &&
                                        <span className="label-text-alt text-red-500">{errors.password?.message}</span>
                                    }
                                </label>
                                <label class="label">
                                    <button onClick={async () => {
                                        await sendPasswordResetEmail(email);
                                        toast('Send Password Reset Email');
                                    }}
                                        class="link link-hover">Forgot password?</button>
                                </label>
                            </div>
                            <div class="form-control">
                                <input class="btn btn-primary text-white" type="submit" value="Login" />
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