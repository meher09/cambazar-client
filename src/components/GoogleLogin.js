import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Spinner from './Spinner';


const GoogleLogin = () => {
    const { signInWithGoogle, loading, setLoading } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        console.log('Clicked')
        signInWithGoogle()
            .then(result => {
                navigate(from, { replace: true })
                toast.success('You have logged in Successfully')
                setLoading(false)
            }).catch(err => {
                toast.error(err.message)
                setLoading(false)
            })

    }

    return (
        <div className="flex justify-center">

            <button onClick={handleGoogleSignIn} className="btn btn-wide btn-base-100"><FcGoogle className='text-2xl mr-3' /> Continue with Google</button>
        </div>
    );
};

export default GoogleLogin;