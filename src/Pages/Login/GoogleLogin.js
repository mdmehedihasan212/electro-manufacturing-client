import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const [token] = useToken(user)

    useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, [token, navigate])

    const GoogleSign = () => {
        signInWithGoogle()
    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="form-control">
            <div className="divider">or</div>
            <input onClick={GoogleSign} className="btn btn-primary text-white" type="submit" value="Continue With Google" />
        </div>
    );
};

export default GoogleLogin;