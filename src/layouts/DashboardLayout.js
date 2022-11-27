import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Dashboard/Sidebar';
import Footer from '../components/Shared/Footer';
import Navigation from '../components/Shared/Navigation';

const DashboardLayout = () => {
    return (
        <>
            <Navigation></Navigation>
            <div className="flex container flex-col md:flex-row mt-12">
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </>

    );
};

export default DashboardLayout;