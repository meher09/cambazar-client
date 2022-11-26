import React, { useState } from 'react';
import AdminHeader from '../components/Dashboard/AdminHeader';
import Sidebar from '../components/Dashboard/Sidebar';

const Dashboard = () => {

    return (
        <div className="flex container flex-col md:flex-row mt-12">
            <Sidebar></Sidebar>
            <AdminHeader></AdminHeader>
        </div>

    );
};

export default Dashboard;