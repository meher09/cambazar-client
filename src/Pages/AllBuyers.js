import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllBuyersTable from '../components/Dashboard/AdminBuyers/AllBuyersTable';
import useTitle from '../hooks/useTitle';

const AllBuyers = () => {

    const buyersData = useLoaderData()
    useTitle('All Buyers')

    return (
        <div className="container px-6">
            <h2 className='text-center font-bold text-3xl uppercase mb-10 divider'>All Buyers List </h2>
            <table className="w-full divide-y divide-gray-200 font-medium">
                <thead className="bg-gray-100">
                    <tr>
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
                            Action
                        </th>

                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">

                    {
                        buyersData.map(buyer => <AllBuyersTable key={buyer._id} buyer={buyer}></AllBuyersTable>)
                    }
                </tbody>
            </table>
        </div>

    );
};

export default AllBuyers;