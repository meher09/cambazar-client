import React from 'react';
import { TiTick } from "react-icons/ti";
import { GiPriceTag } from "react-icons/gi";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdPlace } from "react-icons/md";


const AdvertisementCard = () => {
    return (
        <div className="block rounded-lg p-4 shadow-sm shadow-rose-100">
            <img
                alt="Home"
                src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-56 w-full rounded-md object-cover"
            />

            <div className="mt-2">

                <div className="flex justify-between">
                    <div>
                        <p className="font-medium">Canon Eos 4000D DSLR</p>
                        <p className="text-sm text-gray-600">Posted: 19th July 2020</p>

                    </div>
                    <div className='flex items-center'>
                        <img
                            className="rounded-full h-8 w-8 mr-3"
                            src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                            alt="" />
                        <p className="font-medium">Elon Mask</p>


                        <p className="font-medium bg-rose-700 rounded-full text-white ml-3"><TiTick /></p>

                    </div>

                </div>



                <div className="mt-6 flex items-center justify-between gap-8 text-xs">
                    <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                        <MdPlace className='h-6 w-6 text-rose-700' />

                        <div className="mt-1.5 sm:ml-3 sm:mt-0">
                            <p className="text-gray-600">Location</p>
                            <p className="font-medium">Dhaka</p>
                        </div>
                    </div>

                    <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                        <AiOutlineFieldTime className='h-6 w-6 text-rose-700' />

                        <div className="mt-1.5 sm:ml-3 sm:mt-0">
                            <p className="text-gray-700 ">Used</p>
                            <p className="font-medium">2 Years</p>
                        </div>
                    </div>

                    <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                        <GiPriceTag className='h-6 w-6 text-rose-700' />
                        <div className="mt-1.5 sm:ml-3 sm:mt-0">
                            <p className="text-gray-500">Orginal Price</p>
                            <p className="font-medium">80000 USD</p>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-4">
                    <button className="btn btn-sm bg-rose-700 hover:bg-rose-900">Book Now</button>
                </div>


            </div>

        </div >

    );
};

export default AdvertisementCard;