import React, { useContext, useEffect, useState } from 'react';
import MyBookingTable from '../components/Dashboard/MyBookings/MyBookingTable';
import SellerProductTable from '../components/Dashboard/SellerProduct/SellerProductTable';
import { AuthContext } from '../contexts/AuthProvider';

const MyBookings = () => {

    const { user } = useContext(AuthContext)
    const { email } = user
    const [productData, setProductData] = useState([])


    useEffect(() => {
        fetch((`${process.env.REACT_APP_REQUEST_URL}/bookings/${email}`))
            .then(res => res.json())
            .then(data => setProductData(data))
    }, [])



    return (
        <div className="container px-6">
            <h2 className='text-center font-bold text-3xl uppercase mb-10 divider'>My Bookings </h2>
            <table className="w-full divide-y divide-gray-200 font-medium">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            Name
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            Meeting Place
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            Price
                        </th>

                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">


                    {
                        productData.map(product => <MyBookingTable
                            key={product._id}
                            product={product}></MyBookingTable>)
                    }

                </tbody>
            </table>
        </div >
    );
};

export default MyBookings;