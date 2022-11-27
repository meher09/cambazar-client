import React from 'react';

const AllBuyersTable = ({ buyer }) => {
    const { name, email } = buyer
    return (
        <tr>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{name}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{email}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700"><button className="btn btn-sm bg-rose-700 hover:bg-rose-500">Delete</button></td>
        </tr>
    );
};

export default AllBuyersTable;