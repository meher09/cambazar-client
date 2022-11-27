import React from 'react';
import { MdDashboardCustomize } from "react-icons/md";
import { BiImageAdd } from "react-icons/bi";
import { Link } from "react-router-dom";


const Sidebar = () => {
    return (
        <>
            <div className='hidden md:block w-96 border-r'>
                <div id="Main" className="bg-white top-0 bg-white w-full">
                    <div className="w-full">
                        <div className="mt-4 flex flex-col px-6 justify-start items-center px-4 w-full">
                            <button className=" flex jusitfy-start  text-rose-700  rounded py-3 items-center space-x-6 w-full">
                                <MdDashboardCustomize className='w-6 h-6 text-rose-700' />
                                <p className="text-black font-medium border-b border-transparent  ">Dashboard</p>
                            </button>
                            <button className=" flex jusitfy-start  text-indigo-200  rounded py-3 items-center w-full space-x-6">
                                <BiImageAdd className='w-6 h-6 text-rose-700' />
                                <p className="text-black font-medium border-b border-transparent  ">Add Product</p>
                            </button>

                            <button className=" flex jusitfy-start  text-indigo-200  rounded py-3 items-center w-full space-x-6">
                                <BiImageAdd className='w-6 h-6 text-rose-700' />
                                <p className="text-black font-medium border-b border-transparent  ">My Products</p>
                            </button>

                            <button className=" flex jusitfy-start  text-indigo-200  rounded py-3 items-center w-full space-x-6">
                                <BiImageAdd className='w-6 h-6 text-rose-700' />
                                <p className="text-black font-medium border-b border-transparent  ">My Buyers</p>
                            </button>



                            <button className=" flex jusitfy-start  text-indigo-200  rounded py-3 items-center w-full space-x-6">
                                <BiImageAdd className='w-6 h-6 text-rose-700' />
                                <Link to='/dashboard/buyers' className="text-black font-medium border-b border-transparent ">All Buyers</Link>
                            </button>


                            <button className=" flex jusitfy-start  text-indigo-200  rounded py-3 items-center w-full space-x-6">
                                <BiImageAdd className='w-6 h-6 text-rose-700' />
                                <Link to="/dashboard/sellers" className="text-black font-medium border-b border-transparent  ">All Sellers</Link>
                            </button>


                            <button className=" flex jusitfy-start  text-indigo-200  rounded py-3 items-center w-full space-x-6">
                                <BiImageAdd className='w-6 h-6 text-rose-700' />
                                <p className="text-black font-medium border-b border-transparent  ">My Orders</p>
                            </button>

                            <button className=" flex jusitfy-start  text-indigo-200  rounded py-3 items-center w-full space-x-6">
                                <BiImageAdd className='w-6 h-6 text-rose-700' />
                                <p className="text-black font-medium border-b border-transparent">Reported Items</p>
                            </button>
                        </div>

                    </div>

                </div>



            </div>
            <div className="md:hidden">
                hellow
            </div>

        </>
    );
};

export default Sidebar;