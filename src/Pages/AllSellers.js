import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllSellersTable from '../components/Dashboard/AdminSeller/AllSellersTable';
import useTitle from '../hooks/useTitle';

const AllSellers = () => {

    const sellersData = useLoaderData()
    useTitle('All Sellers')
    return (
        <div class="container px-6">
            <h2 className='text-center font-bold text-3xl uppercase mb-10 divider'>All Sellers List </h2>
            <table class="w-full divide-y divide-gray-200 font-medium">
                <thead class="bg-gray-100">
                    <tr>
                        <th
                            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Image
                        </th>
                        <th
                            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Name
                        </th>
                        <th
                            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Email
                        </th>
                        <th
                            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Verification Status
                        </th>

                    </tr>
                </thead>

                <tbody class="divide-y divide-gray-200">

                    {
                        sellersData.map(buyer => <AllSellersTable key={buyer._id} buyer={buyer}></AllSellersTable>)
                    }
                </tbody>
            </table>
        </div>

    );
};

export default AllSellers;