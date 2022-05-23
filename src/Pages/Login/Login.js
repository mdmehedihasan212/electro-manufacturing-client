import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
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
                            <div class="form-control mt-3">
                                <input class="btn btn-primary text-white" type="submit" value="Login" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;