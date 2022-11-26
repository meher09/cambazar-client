import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import GoogleLogin from '../components/GoogleLogin';
import Spinner from '../components/Spinner';
import { AuthContext } from '../contexts/AuthProvider';
import useTitle from '../hooks/useTitle';

const Register = () => {
    const { createUser, updateUserProfile, loading, setLoading } = useContext(AuthContext)
    useTitle('Register')

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const image = form.photo.files[0]
        console.log(image)
        const formData = new FormData()
        formData.append('image', image)
        const name = form.name.value;
        const password = form.password.value;
        const email = form.email.value;
        const type = form.type.value;

        createUser(email, password)
            .then(result => {
                const imgAPi = 'https://api.imgbb.com/1/upload?key=724954e4ab07779b7b4c03392b45d358'
                fetch(imgAPi, {
                    method: 'POST',
                    body: formData,
                }).then(res => res.json())
                    .then(data => {
                        const imgurl = data.data.display_url
                        // rest functions
                        updateUserProfile(name, imgurl)
                        toast.success('Successfully Registered')
                        form.reset()
                        setLoading(false)
                    })

            }
            ).catch((error) => {
                toast.error(error.message)
                setLoading(false)
            }
            )
    }

    return (
        <div className="container p-5 lg:w-1/3 lg:border lg:p-10 md:p-10  lg:mt-16">
            <h1 className="text-4xl font-bold my-6 uppercase text-center divider">Register</h1>
            {loading ? <Spinner></Spinner> : ''}
            <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">

                <div className="col-span-6">
                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                        Full Name
                    </label>

                    <input
                        type="text"
                        id="name"
                        placeholder='your Full Name'
                        name="name"
                        required
                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                </div>


                <div className="col-span-6">
                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>

                    <input
                        type="email"
                        id="Email"
                        placeholder='your email'
                        required
                        name="email"
                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                </div>

                <div className="col-span-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>

                    <input
                        type="password"
                        placeholder='your password'
                        required
                        id="password"
                        name="password"
                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                </div>

                <div className="col-span-6">
                    <label className="block text-sm font-medium text-gray-700">
                        Add your Profile Picture
                    </label>
                    <input
                        type="file"
                        required
                        accept='image/*'
                        name='photo'
                        className="file-input file-input-bordered w-full mt-1 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />

                </div>

                <div className="col-span-6">
                    <label htmlFor="Type" className="block text-sm font-medium text-gray-700">Select Your Account Type</label>
                    <select
                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                        required
                        name='type'
                    >
                        <option value='buyer'>Buyer</option>
                        <option value='seller'>Seller</option>
                    </select>
                </div>





                <div className="col-span-6">
                    <p className="text-sm text-gray-500">
                        By creating an account, you agree to our
                        <a href="/" className="text-gray-700 underline mx-2">
                            terms and conditions
                        </a>
                        and
                        <a href="/" className="text-gray-700 underline ml-2">privacy policy</a>.
                    </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button
                        className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                    >
                        Register
                    </button>

                    <p className="mt-4 text-sm text-gray-500 sm:mt-0 ">
                        Already have an account?
                        <Link to="/login" className="text-gray-700 underline ml-2">Login</Link>.
                    </p>
                </div>
            </form>
            <div className="divider">Or</div>

            <GoogleLogin></GoogleLogin>

        </div>
    );
};

export default Register;