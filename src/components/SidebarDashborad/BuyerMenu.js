import React from 'react';
import { BiImageAdd } from "react-icons/bi";

const BuyerMenu = () => {
    return (
        <button className=" flex jusitfy-start  text-indigo-200  rounded py-3 items-center w-full space-x-6">
            <BiImageAdd className='w-6 h-6 text-rose-700' />
            <p className="text-black font-medium border-b border-transparent  ">My Orders</p>
        </button>
    );
};

export default BuyerMenu;