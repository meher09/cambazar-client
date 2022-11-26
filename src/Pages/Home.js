import React from 'react';
import Advertisements from '../components/Home/Advertisements';
import BlogSection from '../components/Home/BlogSection';
import Categories from '../components/Home/Categories';
import HomeSlider from '../components/Home/HomeSlider';
import HowWorks from '../components/Home/HowWorks';
import Services from '../components/Home/Services';
import useTitle from '../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <>
            <HomeSlider></HomeSlider>
            <HowWorks></HowWorks>
            <Advertisements></Advertisements>
            <Services></Services>
            <Categories></Categories>
            <BlogSection></BlogSection>
        </>
    );
};

export default Home;