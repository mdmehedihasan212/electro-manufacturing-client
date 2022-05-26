import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className="drawer drawer-mobile px-12">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content text-center px-6">
                {/* <!-- Page content here --> */}
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to={'/dashboard'}>Update My Profile</Link></li>
                    {user && <>
                        <li><Link to={'/dashboard/myorders'}>My Orders</Link></li>
                        <li><Link to={'/dashboard/addreview'}>Add A Review</Link></li>
                    </>
                    }
                    {
                        admin && <>
                            <li><Link to={'/dashboard/manageallorders'}>Manage All Orders</Link></li>
                            <li><Link to={'/dashboard/addproduct'}>Add A Product</Link></li>
                            <li><Link to={'/dashboard/manageproducts'}>Manage Products</Link></li>
                            <li><Link to={'/dashboard/makeadmin'}>Make Admin</Link></li>
                        </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;