import React, { useContext, useEffect, useState } from 'react';
import SellerProductTable from '../components/Dashboard/SellerProduct/SellerProductTable';
import Spinner from '../components/Spinner';
import { AuthContext } from '../contexts/AuthProvider';

const MyProduct = () => {
    const { user, loading, setLoading } = useContext(AuthContext)
    const apiUrl = `${process.env.REACT_APP_REQUEST_URL}/products/seller/${user.email}`

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    return (
        <div className="container px-6">
            <h2 className='text-center font-bold text-3xl uppercase mb-10 divider'>My Products </h2>
            <table className="w-full divide-y divide-gray-200 font-medium">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            Name
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            Status
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            Price
                        </th>

                        <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900" >
                            Action
                        </th>

                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">


                    {
                        products.map(product => <SellerProductTable
                            key={product._id}
                            product={product}></SellerProductTable>)
                    }


                </tbody>
            </table >
        </div >

    );
};

export default MyProduct;