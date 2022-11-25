import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { FcGoogle } from 'react-icons/fc';


const GoogleLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext)

    const handleGoogleSignIn = () => {
        console.log('Clicked')
        signInWithGoogle()
            .then(result => {
            
            })

    }

    return (
        <div className="flex justify-center">
            <button onClick={handleGoogleSignIn} className="btn btn-wide btn-base-100"><FcGoogle className='text-2xl mr-3' /> Continue with Google</button>
        </div>
    );
};

export default GoogleLogin;