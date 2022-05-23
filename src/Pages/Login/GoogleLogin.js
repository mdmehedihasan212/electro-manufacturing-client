import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.init';

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const GoogleSign = () => {
        signInWithGoogle()
        toast('Successfully Sign In With Google')
    }

    return (
        <div class="form-control">
            <div class="divider">or</div>
            <input onClick={GoogleSign} class="btn btn-primary text-white" type="submit" value="Continue With Google" />
        </div>
    );
};

export default GoogleLogin;