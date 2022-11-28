import React from 'react';
import { BiImageAdd } from "react-icons/bi";
import { Link } from 'react-router-dom';


const SellerMenu = () => {
    return (
        <>
            <button className=" flex jusitfy-start  text-indigo-200  rounded py-3 items-center w-full space-x-6">
                <BiImageAdd className='w-6 h-6 text-rose-700' />
                <Link to='/dashboard/add-product' className="text-black font-medium border-b border-transparent  ">Add Product</Link>
            </button>

            <button className=" flex jusitfy-start  text-indigo-200  rounded py-3 items-center w-full space-x-6">
                <BiImageAdd className='w-6 h-6 text-rose-700' />
                <Link to="/dashboard/my-products" className="text-black font-medium border-b border-transparent  ">My Products</Link>
            </button>
        </>
    );
};

export default SellerMenu;