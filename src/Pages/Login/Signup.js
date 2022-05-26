import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import useToken from '../../hooks/useToken';
import GoogleLogin from './GoogleLogin';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [sendPasswordResetEmail, sending, ResetError] = useSendPasswordResetEmail(auth);

    const [token] = useToken(user)

    useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, [token, navigate,])

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="hero min-h-screen">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className='text-4xl text-center text-primary mt-6'>Sign Up</h1>
                        <div className="card-body">
                            <div className="form-control">
                                <input
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is required'
                                        },
                                        pattern: {
                                            value: /[A-Za-z]{3}/,
                                            message: 'Provide a valid name'
                                        }
                                    })}
                                    type="text"
                                    placeholder="Name"
                                    className="input input-bordered" />
                                <label className="label">
                                    {errors.name?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">{errors.name?.message}</span>
                                    }
                                    {errors.name?.type === 'pattern' &&
                                        <span className="label-text-alt text-red-500">{errors.name?.message}</span>
                                    }
                                </label>
                            </div>
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
                            </div>
                            <div className="form-control">
                                <input className="btn btn-primary text-white" type="submit" value="Sign Up" />
                            </div>
                            <GoogleLogin></GoogleLogin>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Signup;