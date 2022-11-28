import React, { useEffect, useState } from 'react';
import AdvertisementCard from './AdvertisementCard';
import BookingModal from '../BookingModal';


const Advertisements = () => {

    const [productInfo, setProductInfo] = useState({})
    const [products, setProducts] = useState([])
    useEffect(() => { fetch(' https://server-nine-lilac.vercel.app/products').then(res => res.json()).then(data => setProducts(data)) }
        , [])



    return (
        <>
            {
                products.length > 0 && <div className="container mt-16">
                    <div className="divider font-bold">Advertisements</div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {products.map((product) => <>
                            <AdvertisementCard
                                key={products.id}
                                setProductInfo={setProductInfo}
                                product={product}>
                            </AdvertisementCard>
                        </>)


                        }
                    </div>
                    <BookingModal productInfo={productInfo}></BookingModal>


                </div>
            }



        </>

    );
};

export default Advertisements;