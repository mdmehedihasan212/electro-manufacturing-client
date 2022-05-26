import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import useToken from '../../hooks/useToken';

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
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

    return (
        <div class="form-control">
            <div class="divider">or</div>
            <input onClick={GoogleSign} class="btn btn-primary text-white" type="submit" value="Continue With Google" />
        </div>
    );
};

export default GoogleLogin;