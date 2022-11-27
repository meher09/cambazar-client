import React, { useEffect, useState } from 'react';
import AdvertisementCard from './AdvertisementCard';

const Advertisements = () => {

    const [products, setProducts] = useState([])
    useEffect(() => { fetch('http://localhost:5000/products').then(res => res.json()).then(data => setProducts(data)) }
        , [])



    return (
        <>
            {
                products.length > 0 && <div className="container mt-16">
                    <div className="divider font-bold">Advertisements</div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {products.map((product, i) => <AdvertisementCard key={products.id} product={product}></AdvertisementCard>)
                        }
                    </div>
                </div>
            }

        </>

    );
};

export default Advertisements;