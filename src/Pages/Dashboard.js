import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

const Dashboard = () => {

    const { user} = useContext(AuthContext)


    return (
        <>
            < div className="card w-96 bg-base-100 shadow-xl mx-auto" >
                <h2 className='mt-6 mx-auto font-medium'>Welcome to Cam Bazar Dashboard</h2>
                <div className="divider font-sm">Your Profile Information</div>
                <figure className="px-10 pt-10">
                    <img src={user?.photoURL ? user?.photoURL : 'https://i.ibb.co/HTs2nBq/default.png'} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{user?.displayName}</h2>
                    <p>email: {user?.email}</p>
                </div>
            </div >

        </>

    );
};

export default Dashboard;