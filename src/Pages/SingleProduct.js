import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { TiTick } from "react-icons/ti";
import toast from 'react-hot-toast'

const SingleProduct = () => {

    const product = useLoaderData()
    const { _id, pName, description, orginalPrice,
        sellingPrice, date, condition,
        product_image, purchaseYear,
        used, seller, seller_image, verified,
        seller_number, advertisement,
        location, category, status
    } = product

    const [productCategory, setProductCategory] = useState({})
    useEffect(() => { fetch(`http://localhost:5000/category/${category}`).then(res => res.json()).then(data => setProductCategory(data)) }, [])

    const handleReport = (id) => {
        const dbUri = `http://localhost:5000/product/${_id}`
        const reported = { 'reported': true }
        fetch(dbUri, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reported)
        })
            .then(res => res.json()).then(data => {
                if (data.acknowledged) {
                    toast.success("Reported to admin")
                }
            })
    }


    return (


        <section>

            <div className="mx-auto max-w-screen-xl px-4 py-8">
                <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
                        <img
                            alt=""
                            src={product_image}
                            className="aspect-square w-full rounded-xl object-cover"
                        />
                    </div>

                    <div className="">
                        <div className="flex justify-between">
                            <p
                                className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600"
                            >
                                {productCategory && productCategory?.name}
                            </p>
                            <button
                                onClick={() => handleReport(_id)}
                                className='text-white bg-rose-700 px-3 py-0.5 rounded-full'
                            >Report This Items</button>

                        </div>


                        <div className="mt-8 flex justify-between">
                            <div className="max-w-[35ch]">
                                <h1 className="text-2xl font-bold">
                                    {pName}
                                </h1>


                                <div className="mt-2 -ml-0.5 flex items-center">

                                    <img src={seller_image} alt="" className="h-6 rounded-full w-6 mr-2" />
                                    <p>{seller}</p>
                                    {verified && <p className="font-medium bg-rose-700 rounded-full text-white ml-3"><TiTick /></p>}


                                </div>

                            </div>

                            <p className="text-lg font-bold">${sellingPrice}</p>
                        </div>

                        <details className="relative mt-4">
                            <summary className="block">
                                <div>
                                    <div className="prose max-w-none">
                                        <p> {description}</p>
                                    </div>

                                </div>
                            </summary>
                        </details>

                        <div className="divider text-xl text-rose-500 font-bold">Product Details</div>
                        <div className="overflow-x-auto ">
                            <table className="min-w-full divide-y-2 divide-gray-200 text-sm">


                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                            Product Name
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-2 font-bold text-rose-700 text-gray-700">{pName}</td>

                                    </tr>

                                    <tr>
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                            Product Condition
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{condition}</td>

                                    </tr>


                                    <tr>
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                            Orginal Price
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$ {orginalPrice}</td>

                                    </tr>

                                    <tr>
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                            Year of Purchase
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{purchaseYear}</td>

                                    </tr>

                                    <tr>
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                            Total Usage
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{used}</td>

                                    </tr>

                                </tbody>
                            </table>

                            <div className="divider my-12 text-xl text-rose-500 font-bold">Seller Information</div>

                            <table className="min-w-full divide-y-2 divide-gray-200 text-sm">


                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td colSpan="2" className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">
                                            <img src={seller_image} alt="" className='w-16 h-16 rounded-full mx-auto' />

                                        </td>

                                    </tr>

                                    <tr>
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                            Seller Name
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex items-center">
                                            {seller} {verified && <><TiTick className='bg-rose-700 ml-2 text-white rounded-full' /></>}
                                        </td>

                                    </tr>

                                    <tr>
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                            Seller Mobile Number
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{seller_number}</td>

                                    </tr>

                                    <tr>
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                            Location
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{location}</td>

                                    </tr>

                                    <tr>
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                            Posted on:
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{date}</td>

                                    </tr>

                                </tbody>
                            </table>
                        </div>



                    </div>
                </div>
            </div>
        </section >


    );
};
export default SingleProduct;