import React from 'react';
import { BiImageAdd } from "react-icons/bi";
import { Link } from 'react-router-dom';

const BuyerMenu = () => {
    return (
        <button className=" flex jusitfy-start  text-indigo-200  rounded py-3 items-center w-full space-x-6">
            <BiImageAdd className='w-6 h-6 text-rose-700' />
            <Link to="/dashboard/my-bookings" className="text-black font-medium border-b border-transparent  ">My Bookings</Link>
        </button>
    );
};

export default BuyerMenu;