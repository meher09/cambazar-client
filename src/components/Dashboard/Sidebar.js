import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import AdminMenu from '../SidebarDashborad/AdminMenu';
import AllUsersMenu from '../SidebarDashborad/AllUsersMenu';
import BuyerMenu from '../SidebarDashborad/BuyerMenu';
import SellerMenu from '../SidebarDashborad/SellerMenu';


const Sidebar = () => {
    const { user } = useContext(AuthContext)

    const userRole = useAdmin(user?.email)

    console.log(userRole)

    return (
        <>
            <div className='hidden md:block w-96 border-r'>
                <div id="Main" className="bg-white top-0 bg-white w-full">
                    <div className="w-full">
                        <div className="mt-4 flex flex-col px-6 justify-start items-center px-4 w-full">
                            <AllUsersMenu></AllUsersMenu>
                            {userRole === 'admin' && <AdminMenu></AdminMenu>}
                            {userRole === 'buyer' && <BuyerMenu></BuyerMenu>}
                            {userRole === 'seller' && <SellerMenu></SellerMenu>}




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