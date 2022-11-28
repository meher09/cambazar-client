import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllSellersTable from '../components/Dashboard/AdminSeller/AllSellersTable';
import useTitle from '../hooks/useTitle';

const AllSellers = () => {

    const sellersData = useLoaderData()
    useTitle('All Sellers')
    return (
        <div className="container px-6">
            <h2 className='text-center font-bold text-3xl uppercase mb-10 divider'>All Sellers List </h2>
            <table className="w-full divide-y divide-gray-200 font-medium">
                <thead className="bg-gray-100">
                    <tr>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Image
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Name
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Email
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Verification Status
                        </th>

                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">

                    {
                        sellersData.map(user => <AllSellersTable key={user._id} user={user}></AllSellersTable>)
                    }
                </tbody>
            </table>
        </div>

    );
};

export default AllSellers;