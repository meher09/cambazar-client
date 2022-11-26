import React from 'react';
import AdvertisementCard from './AdvertisementCard';

const Advertisements = () => {
    return (
        <div className="container mt-16">
            <div className="divider font-bold">Advertisements</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {[...Array(3)].map(ads => <AdvertisementCard></AdvertisementCard>)}
            </div>
        </div>
    );
};

export default Advertisements;