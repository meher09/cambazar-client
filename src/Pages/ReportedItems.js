import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReportedTable from '../components/Dashboard/Reported/ReportedTable';

const ReportedItems = () => {
    const reportedItems = useLoaderData()
    return (
        <div className="container px-6">
            <h2 className='text-center font-bold text-3xl uppercase mb-10 divider'>All Sellers List </h2>
            <table className="w-full divide-y divide-gray-200 font-medium">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            #
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            Name
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            View Link
                        </th>

                        <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900" >
                            Action
                        </th>

                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">

                    {
                        reportedItems.map((reported, i) => <ReportedTable key={reported._id} reported={reported} i={i}></ReportedTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ReportedItems;