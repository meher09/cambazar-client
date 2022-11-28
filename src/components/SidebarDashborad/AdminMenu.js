import React from 'react';
import { BiImageAdd } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const AdminMenu = () => {
    return (
        <>
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
                <Link to="/dashboard/reported" className="text-black font-medium border-b border-transparent">Reported Items</Link>
            </button>
        </>
    );
};

export default AdminMenu;