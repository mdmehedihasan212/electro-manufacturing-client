import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase/firebase.init';

const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <div class="drawer drawer-mobile px-12">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content text-center px-6">
                {/* <!-- Page content here --> */}
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to={'/dashboard/myprofile'}>My Profile</Link></li>
                    {user && <>
                        <li><Link to={'/dashboard'}>My Orders</Link></li>
                        <li><Link to={'/dashboard/addreview'}>Add A Review</Link></li>
                    </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;