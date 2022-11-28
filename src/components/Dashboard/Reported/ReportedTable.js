import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ReportedTable = ({ i, reported }) => {
    const { _id, pName, seller, product_image } = reported

    const handleKeep = (id) => {

        const dbUri = ` https://server-nine-lilac.vercel.app/product/reported/${_id}`
        const reported = { reported: false }
        fetch(dbUri, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reported)
        })
            .then(res => res.json()).then(data => {
                if (data.acknowledged) {
                    toast.success("Cleared From Reported Items")
                }
            })
    }


    // Delete Items 
    const handleDelete = (id) => {
        const dbUri = ` https://server-nine-lilac.vercel.app/product/reported/item/${id}`
        fetch(dbUri, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }





    return (
        <tr>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{i + 1}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <div className="flex items-center">
                    <img src={product_image} className="w-16 h-16 rouned-lg mr-2" alt="" />
                    <div className="text-sm">
                        <p>{pName}</p>
                        <p>Seller: {seller}</p>
                    </div>
                </div>
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <Link to={`/product/${_id}`} className="btn btn-sm bg-yellow-600 hover:bg-yellow-500">
                    View Product
                </Link>
            </td>



            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <div className="flex">
                    <button
                        onClick={() => handleKeep(_id)}
                        className='btn btn-sm bg-green-600 hover:bg-green-700 border-green-700 font-bold mr-2'>✓</button>
                    <button
                        onClick={() => handleDelete(_id)}
                        className='btn btn-sm bg-rose-600 hover:bg-rose-700 border-green-700 font-bold'>✕</button>
                </div>
            </td>
        </tr >
    );
};

export default ReportedTable;