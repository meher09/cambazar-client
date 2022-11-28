import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AdvertisementCard from '../components/Home/AdvertisementCard';

const SingleCategory = () => {

    const products = useLoaderData()

  



    return (
        <section>
            <div className="container px-4 py-12 sm:px-6 lg:px-8">

                <div className="grid grid-cols-3">
                    {products.map(product => <AdvertisementCard key={product._id} product={product}></AdvertisementCard>)}
                </div>
            </div>
        </section>


    );
};

export default SingleCategory;