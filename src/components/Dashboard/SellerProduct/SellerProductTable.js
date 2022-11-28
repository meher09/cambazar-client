import React from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast'


const SellerProductTable = ({ product }) => {
    const { _id, pName, product_image, status, sellingPrice, advertisement } = product

    const handleAdvertise = (id) => {
        const advertise = { advertisement: true }
        fetch(` https://server-nine-lilac.vercel.app/products/advertise/    ${id}`, {
            method: "PUT",
            headers: {
                "content-type": "Application/json"
            },
            body: JSON.stringify(advertise)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success("Advertisement Started")
                }
            })

    }





    return (
        <tr>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <div className="flex items-center">
                    <img src={product_image} className="w-16 h-16 rouned-lg mr-2" alt="" />
                    <div className="text-sm text-rose-800 underline">
                        <Link to={`/product/${_id}`}>{pName}</Link>
                    </div>
                </div>
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <p>{status}</p>
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {sellingPrice}
            </td>
            <td>
                {
                    advertisement
                        ?
                        'Ad running'
                        :
                        <button
                            onClick={() => handleAdvertise(_id)}
                            className='btn btn-sm bg-green-600 hover:bg-green-700 border-green-700 font-bold'>
                            Advertise
                        </button>

                }

            </td>
        </tr>
    );
};

export default SellerProductTable;