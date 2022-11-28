import React from 'react';
import { MdDashboardCustomize } from "react-icons/md";
import { Link } from 'react-router-dom';



const AllUsersMenu = () => {
    return (
        <button className=" flex jusitfy-start  text-rose-700  rounded py-3 items-center space-x-6 w-full">
            <MdDashboardCustomize className='w-6 h-6 text-rose-700' />
            <Link to="/dashboard" className="text-black font-medium border-b border-transparent  ">Dashboard</Link>
        </button>
    );
};

export default AllUsersMenu;