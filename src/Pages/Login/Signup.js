import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.init';
import GoogleLogin from './GoogleLogin';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const onSubmit = async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        alert('Updated profile');
        toast('Successfully Create User With Email')
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="hero min-h-screen">
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className='text-4xl text-center text-primary mt-6'>Sign Up</h1>
                        <div class="card-body">
                            <div class="form-control">
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
                                    class="input input-bordered" />
                                <label class="label">
                                    {errors.name?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">{errors.name?.message}</span>
                                    }
                                    {errors.name?.type === 'pattern' &&
                                        <span className="label-text-alt text-red-500">{errors.name?.message}</span>
                                    }
                                </label>
                            </div>
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
                                    <Link to="/login" class="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div class="form-control">
                                <input class="btn btn-primary text-white" type="submit" value="Sign Up" />
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