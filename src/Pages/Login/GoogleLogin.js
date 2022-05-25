import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.init';

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    const GoogleSign = () => {
        signInWithGoogle()
        navigate('/')
    }

    return (
        <div class="form-control">
            <div class="divider">or</div>
            <input onClick={GoogleSign} class="btn btn-primary text-white" type="submit" value="Continue With Google" />
        </div>
    );
};

export default GoogleLogin;