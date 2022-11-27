import React from 'react';
import { TiTick } from "react-icons/ti";
import { GiPriceTag } from "react-icons/gi";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdPlace } from "react-icons/md";


const AdvertisementCard = ({ product }) => {



    const { pName,
        product_image,
        date,
        location,
        used,
        orginalPrice,
        sellingPrice,
        seller_image,
        seller,
        verified } = product




    return (
        <div className="block rounded-lg p-4 shadow-sm shadow-rose-100">
            <img
                alt="Home"
                src={product_image}
                className="h-56 w-full rounded-md object-cover"
            />

            <div className="mt-2">

                <div className="flex justify-between">
                    <div>
                        <p className="font-medium">{pName}</p>
                        <p className="text-sm text-gray-600">{date}</p>

                    </div>

                    <div>
                        <div className='flex items-center'>
                            <img
                                className="rounded-full h-8 w-8 mr-3"
                                src={seller_image}
                                alt="" />
                            <p className="font-medium">{seller}</p>
                            {verified && <p className="font-medium bg-rose-700 rounded-full text-white ml-3"><TiTick /></p>}

                        </div>
                    </div>



                </div>



                <div className="mt-6 flex items-center justify-between gap-8 text-xs">
                    <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                        <MdPlace className='h-6 w-6 text-rose-700' />

                        <div className="mt-1.5 sm:ml-3 sm:mt-0">
                            <p className="text-gray-600">Location</p>
                            <p className="font-medium">{location}</p>
                        </div>
                    </div>

                    <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                        <AiOutlineFieldTime className='h-6 w-6 text-rose-700' />

                        <div className="mt-1.5 sm:ml-3 sm:mt-0">
                            <p className="text-gray-700 ">Used</p>
                            <p className="font-medium">{used}</p>
                        </div>
                    </div>

                    <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                        <GiPriceTag className='h-6 w-6 text-rose-700' />
                        <div className="mt-1.5 sm:ml-3 sm:mt-0">
                            <p className="text-gray-500">Orginal Price</p>
                            <p className="font-medium">{orginalPrice} USD</p>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-center gap-8 text-xs">
                    <p className="text-lg font-bold rounded p-3 bg-transparent text-rose-900 border border-rose-900  text-center">Sale: {sellingPrice} USD</p>
                </div>


                <div className="mt-4 flex justify-between">
                    <button className="btn btn-sm bg-rose-700 hover:bg-rose-900">Book Now</button>
                    <button className="btn btn-sm bg-rose-500 hover:bg-rose-900">More Details</button>
                </div>


            </div>

        </div >

    );
};

export default AdvertisementCard;