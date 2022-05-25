import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.init';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleSubmit = (event) => {
        event.preventDefault();

        const updateProfile = {
            name: user?.displayName,
            email: user?.email,
            education: event.target.education.value,
            city: event.target.city.value,
            link: event.target.link.value,
            number: event.target.number.value,
        }
        console.log(updateProfile);

        fetch("https://enigmatic-taiga-40573.herokuapp.com/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateProfile),
        })
            .then((res) => res.json())
            .then((data) => {
                toast('Successfully update user information')
            });
    }

    return (
        <div class="hero min-h-screen">
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <h1 className='text-2xl mb-3 text-primary'>Update Profile</h1>
                    <form onSubmit={handleSubmit} class="form-control">
                        <input type="text" value={user?.displayName} disabled class="input input-bordered mb-2" />
                        <input type="text" value={user?.email} disabled class="input input-bordered mb-2" />
                        <input type="text" name='education' placeholder='Education' class="input input-bordered mb-2" />
                        <input type="text" name='city' placeholder='City' class="input input-bordered mb-2" />
                        <input type="text" name='link' placeholder='LinkedIn Profile Link' class="input input-bordered mb-2" />
                        <input type="number" name='number' placeholder='Phone Number' class="input input-bordered mb-2" />
                        <div class="form-control mt-3">
                            <button type='submit' class="btn btn-primary text-white">Update Profile</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;