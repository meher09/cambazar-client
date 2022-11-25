import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Main = () => {
    return (
        <>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;