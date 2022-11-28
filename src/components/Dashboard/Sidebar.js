import React from 'react';
import { BiImageAdd } from "react-icons/bi";
import { Link } from "react-router-dom";
import AdminMenu from '../SidebarDashborad/AdminMenu';
import AllUsersMenu from '../SidebarDashborad/AllUsersMenu';
import BuyerMenu from '../SidebarDashborad/BuyerMenu';
import SellerMenu from '../SidebarDashborad/SellerMenu';


const Sidebar = () => {
    return (
        <>
            <div className='hidden md:block w-96 border-r'>
                <div id="Main" className="bg-white top-0 bg-white w-full">
                    <div className="w-full">
                        <div className="mt-4 flex flex-col px-6 justify-start items-center px-4 w-full">
                            <AllUsersMenu></AllUsersMenu>
                            <SellerMenu></SellerMenu>
                            <BuyerMenu></BuyerMenu>
                            <AdminMenu></AdminMenu>
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