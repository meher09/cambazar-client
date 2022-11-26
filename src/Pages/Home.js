import React from 'react';
import Spinner from '../components/Spinner';
import useTitle from '../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            This is home
        </div>
    );
};

export default Home;