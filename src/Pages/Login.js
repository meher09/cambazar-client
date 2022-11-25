import React from 'react';
import { Link } from 'react-router-dom';
import GoogleLogin from '../components/GoogleLogin';

const Login = () => {


    return (

        <div className="container lg:w-1/3 border lg:p-10 mt-16">
            <h1 className="text-4xl font-bold my-6 uppercase text-center divider">Login</h1>
            <form action="#" className="mt-8 grid grid-cols-6 gap-6">


                <div className="col-span-6">
                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>

                    <input
                        type="email"
                        id="Email"
                        name="email"
                        placeholder='your email'
                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                </div>

                <div className="col-span-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>

                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder='your email'

                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
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
                        Login
                    </button>

                    <p className="mt-4 text-sm text-gray-500 sm:mt-0 ">
                        Don't have any account?
                        <Link to="/register" className="text-gray-700 underline ml-2">Register</Link>.
                    </p>
                </div>
            </form>
            <div className="divider">Or</div>
            <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default Login;