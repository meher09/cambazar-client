import React from 'react';
import { Link } from 'react-router-dom';

const MyBookingTable = ({ product }) => {
    const { pName, meeting_location, sellingPrice, product_id } = product
    return (
        <tr>


            <td className="whitespace-nowrap px-4 py-2 text-rose-700 underline">
                <Link to={`/product/${product_id}`}>{pName}</Link>
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{meeting_location}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{sellingPrice}</td>
        </tr>
    );
};

export default MyBookingTable;