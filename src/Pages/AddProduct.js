import React, { useContext, useEffect, useState } from 'react';

import { useForm } from "react-hook-form";
import { AuthContext } from '../contexts/AuthProvider';


const AddProduct = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/categories').
            then(res => res.json()).
            then(data => setCategory(data))
    },
        [])
    const user = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const handleFormSubmit = data => {

    };



    return (
        <form className="container ml-5" onSubmit={handleSubmit(handleFormSubmit)}>
            <h1 className='text-center text-2xl font-bold uppercase divider mb-6'>Add Your Products</h1>
            <div className="w-full px-4 mx-auto md:w-5/6  lg:w-1/2">
                <div className="col-span-6 mb-6">
                    <label htmlFor="password" className="block font-bold font-medium text-black">
                        Product Name
                    </label>

                    <input
                        {...register("pName", { required: true })}
                        type="Product Name"
                        required
                        placeholder="DSLR Camera Model 350"
                        className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                    />
                </div>

                <div className="col-span-6 mb-6">
                    <label htmlFor="Image" className="block  font-medium text-black">
                        Product Image
                    </label>

                    <input
                        type="file"
                        accept='image/*'
                        {...register("product_image")}
                        className="file-input border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none" />
                </div>

                <div className="col-span-6 mb-6">
                    <label htmlFor="Image" className="block  font-medium text-black">
                        Product Condition
                    </label>

                    <select
                        {...register("condition")}
                        className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none">
                        <option value="Excellent">Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                    </select>
                </div>

                <div className="col-span-6 mb-6">
                    <label htmlFor="Image" className="block  font-medium text-black">
                        Product Category
                    </label>

                    <select
                        {...register("category")}
                        className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none">
                        {
                            category.map(c => <option key={c._id} value={c._id}>{c.name}</option>)
                        }

                    </select>
                </div>



                <div className="col-span-6 mb-6">
                    <label htmlFor="Image" className="block  font-medium text-black">
                        Location
                    </label>

                    <input
                        type="text"
                        {...register("location", { required: true })}
                        placeholder='Chittagong'
                        className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                    />
                </div>


                <div className="col-span-6 mb-6">
                    <label htmlFor="Image" className="block  font-medium text-black">
                        Product Sale Price
                    </label>

                    <input
                        type="text"
                        required
                        placeholder='Product Name'
                        {...register("sellingPrice", { required: true })}
                        className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                    />
                </div>

                <div className="col-span-6 mb-6">
                    <label htmlFor="Image" className="block  font-medium text-black">
                        Product Orginal Price
                    </label>

                    <input
                        type="text"
                        name="pImage"
                        placeholder='Product Name'
                        {...register("orginalPrice", { required: true })}
                        className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                    />
                </div>

                <div className="col-span-6 mb-6">
                    <label htmlFor="Image" className="block  font-medium text-black">
                        Years of Use
                    </label>

                    <input
                        type="text"
                        required
                        placeholder='Product Name'
                        {...register("used", { required: true })}
                        className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                    />
                </div>


                <div className="col-span-6 mb-6">
                    <label htmlFor="Image" className="block  font-medium text-black">
                        Product Purchase Year
                    </label>

                    <input
                        type="text"
                        required
                        placeholder='Product Name'
                        {...register("purchaseYear", { required: true })}
                        className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                    />
                </div>

                <div className="col-span-6 mb-6">
                    <label htmlFor="Image" className="block  font-medium text-black">
                        Description
                    </label>

                    <textarea
                        className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                        rows="4"
                        placeholder="Your message"
                        {...register("description", { required: true })}
                    ></textarea>

                </div>

                <div className="mb-10">
                    <input
                        type="submit"
                        value="Add Product"
                        className="border-[#E9EDF4] w-full rounded-md border bg-rose-700 py-3 px-5 text-white placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                    />
                </div>
            </div>


        </form >
    );
};

export default AddProduct;