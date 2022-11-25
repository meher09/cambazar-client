import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="container lg:w-1/3 border lg:p-10 mt-16">
            <h1 className="text-4xl font-bold my-6 uppercase text-center divider">Register</h1>
            <form action="#" class="mt-8 grid grid-cols-6 gap-6">

                <div class="col-span-6">
                    <label for="Email" class="block text-sm font-medium text-gray-700">
                        Full Name
                    </label>

                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                </div>


                <div class="col-span-6">
                    <label for="Email" class="block text-sm font-medium text-gray-700">
                        Email
                    </label>

                    <input
                        type="email"
                        id="Email"
                        required
                        name="email"
                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                </div>

                <div class="col-span-6">
                    <label for="password" class="block text-sm font-medium text-gray-700">
                        Password
                    </label>

                    <input
                        type="password"
                        required
                        id="password"
                        name="password"
                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                </div>

                <div class="col-span-6">
                    <label for="Email" class="block text-sm font-medium text-gray-700">
                        Phone Number
                    </label>

                    <input
                        type="text"
                        required
                        id="phone"
                        name="phone"
                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                </div>

                <div class="col-span-6">
                    <label for="Email" class="block text-sm font-medium text-gray-700">
                        Location
                    </label>

                    <input
                        type="text"
                        required
                        id="location"
                        name="location"
                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                </div>


                <div className="col-span-6">
                    <label htmlFor="Type" class="block text-sm font-medium text-gray-700">Select Your Account Type</label>
                    <select
                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                        required
                    >
                        <option>Buyer</option>
                        <option>Seller</option>
                    </select>
                </div>





                <div class="col-span-6">
                    <p class="text-sm text-gray-500">
                        By creating an account, you agree to our
                        <a href="/" class="text-gray-700 underline mx-2">
                            terms and conditions
                        </a>
                        and
                        <a href="/" class="text-gray-700 underline ml-2">privacy policy</a>.
                    </p>
                </div>

                <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button
                        class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                    >
                        Register
                    </button>

                    <p class="mt-4 text-sm text-gray-500 sm:mt-0 ">
                        Already have an account?
                        <Link to="/login" class="text-gray-700 underline ml-2">Login</Link>.
                    </p>
                </div>
            </form>
            <div className="divider">Or</div>
            <div className="flex justify-center">
                <button className="btn btn-wide btn-base-100"><FcGoogle className='text-2xl mr-3' /> Login with Google</button>
            </div>


        </div>
    );
};

export default Register;