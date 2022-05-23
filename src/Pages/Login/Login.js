import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.init';
import GoogleLogin from './GoogleLogin';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user])

    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
        toast('Successfully Sign In With Email')
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
                            <div class="form-control">
                                <input class="btn btn-primary text-white" type="submit" value="Login" />
                            </div>
                            <GoogleLogin></GoogleLogin>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;