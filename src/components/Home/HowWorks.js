import React from 'react';
import { AiFillCamera } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { GiMoneyStack } from "react-icons/gi";


const HowWorks = () => {
    return (
        <div className="container mt-8">
            <div className="w-5/6  mx-auto  md:p-8">
                <h2 className='font-bold text-3xl text-center mb-12 uppercase'>How CamBazar works ?</h2>

                <div>

                    <div>
                        <ol
                            className="grid grid-cols-1 divide-x divide-gray-100 overflow-hidden rounded-lg border border-gray-100 text-sm text-gray-500 sm:grid-cols-3"
                        >
                            <li className="flex items-center justify-center bg-gray-50 p-4">
                                <AiFillCamera className='mr-2  h-32 w-32 flex-shrink-0 text-rose-700	' />

                                <p className="leading-none">
                                    <strong className="block text-rose-600 font-medium"> Choose </strong>

                                </p>
                            </li>

                            <li className="relative flex items-center justify-center bg-gray-50 p-4">
                                <span
                                    className="absolute -left-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-b-0 border-l-0 border-gray-100 bg-white sm:block"
                                >
                                </span>

                                <span
                                    className="absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-b-0 border-l-0 border-gray-100 bg-gray-50 sm:block"
                                >
                                </span>

                                <ImLocation2 className="mr-2 h-32 w-32 flex-shrink-0 text-rose-700" />


                                <p className="leading-none">
                                    <strong className="block text-rose-600 font-medium"> Booked </strong>
                                </p>
                            </li>

                            <li className="flex items-center justify-center p-4">
                                <GiMoneyStack className='mr-2 h-32 w-32 flex-shrink-0 text-rose-700' />
                                <p className="leading-none">
                                    <strong className="block text-rose-600 font-medium"> Payment </strong>
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>




            </div>
        </div>
    );
};

export default HowWorks;