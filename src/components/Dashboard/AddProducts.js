import React from 'react';

const AddProducts = () => {
    return (
        <div className="container ml-5">
            <h1 className='text-center text-2xl font-bold uppercase divider mb-6'>Add Your Products</h1>
            <div class="w-full px-4 mx-auto md:w-5/6  lg:w-1/2">
                <form>
                    <div className="col-span-6 mb-6">
                        <label htmlFor="password" className="block font-bold font-medium text-black">
                            Product Name
                        </label>

                        <input
                            type="password"
                            placeholder="Password"
                            class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                        />
                    </div>

                    <div className="col-span-6 mb-6">
                        <label htmlFor="Image" className="block  font-medium text-black">
                            Product Image
                        </label>

                        <input
                            type="text"
                            id="pImage"
                            required
                            name="pImage"
                            placeholder='Product Name'

                            className="mt-1 w-full rounded-md border-gray-200 bg-white  text-black shadow-sm"
                        />
                    </div>

                    <div className="col-span-6 mb-6">
                        <label htmlFor="Image" className="block  font-medium text-black">
                            Product Price
                        </label>

                        <input
                            type="text"
                            id="pImage"
                            required
                            name="pImage"
                            placeholder='Product Name'

                            className="mt-1 w-full rounded-md border-gray-200 bg-white  text-black shadow-sm"
                        />
                    </div>

                    <div className="col-span-6 mb-6">
                        <label htmlFor="Image" className="block  font-medium text-black">
                            Product Location
                        </label>

                        <input
                            type="text"
                            id="pImage"
                            required
                            name="pImage"
                            placeholder='Product Name'

                            className="mt-1 w-full rounded-md border-gray-200 bg-white  text-black shadow-sm"
                        />
                    </div>


                    <div className="col-span-6 mb-6">
                        <label htmlFor="Image" className="block  font-medium text-black">
                            Product Resell Price
                        </label>

                        <input
                            type="text"
                            id="pImage"
                            required
                            name="pImage"
                            placeholder='Product Name'

                            className="mt-1 w-full rounded-md border-gray-200 bg-white  text-black shadow-sm"
                        />
                    </div>

                    <div className="col-span-6 mb-6">
                        <label htmlFor="Image" className="block  font-medium text-black">
                            Product Orginal Price
                        </label>

                        <input
                            type="text"
                            id="pImage"
                            required
                            name="pImage"
                            placeholder='Product Name'

                            className="mt-1 w-full rounded-md border-gray-200 bg-white  text-black shadow-sm"
                        />
                    </div>

                    <div className="col-span-6 mb-6">
                        <label htmlFor="Image" className="block  font-medium text-black">
                            Years of Use
                        </label>

                        <input
                            type="text"
                            id="pImage"
                            required
                            name="pImage"
                            placeholder='Product Name'

                            className="mt-1 w-full rounded-md border-gray-200 bg-white  text-black shadow-sm"
                        />
                    </div>


                    <div className="col-span-6 mb-6">
                        <label htmlFor="Image" className="block  font-medium text-black">
                            Product Category
                        </label>

                        <input
                            type="text"
                            id="pImage"
                            required
                            name="pImage"
                            placeholder='Product Name'

                            className="mt-1 w-full rounded-md border-gray-200 bg-white  text-black shadow-sm"
                        />
                    </div>

                    <div className="col-span-6 mb-6">
                        <label htmlFor="Image" className="block  font-medium text-black">
                            Description
                        </label>

                        <input
                            type="text"
                            id="pImage"
                            required
                            name="pImage"
                            placeholder='Product Name'

                            className="mt-1 w-full rounded-md border-gray-200 bg-white  text-black shadow-sm"
                        />
                    </div>

                    <div class="mb-10">
                        <input
                            type="submit"
                            value="Sign In"
                            class="bordder-primary w-full cursor-pointer rounded-md border bg-primary py-3 px-5 text-base text-white transition hover:bg-opacity-90"
                        />
                    </div>
                </form>
            </div>


        </div>
    );
};

export default AddProducts;