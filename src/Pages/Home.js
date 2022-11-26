import React from 'react';
import Advertisements from '../components/Home/Advertisements';
import Categories from '../components/Home/Categories';
import HomeSlider from '../components/Home/HomeSlider';
import HowWorks from '../components/Home/HowWorks';
import useTitle from '../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <>
            <HomeSlider></HomeSlider>
            <Advertisements></Advertisements>
            <Categories></Categories>
            <HowWorks></HowWorks>
        </>
    );
};

export default Home;