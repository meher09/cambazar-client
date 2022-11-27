import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {

    const [categories, setCategories] = useState([])



    // Category Loads
    useEffect(() => {
        fetch(`${process.env.REACT_APP_REQUEST_URL}/categories`)
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }, [])

    // Data Loads


    return (

        <div className="div  bg-gray-50 my-8 py-8">
            <section className='container my-8'>


                <div className="divider font-2xl font-bold uppercase">Camera Categories</div>

                <div className="mx-auto  px-4 py-12 sm:px-6 lg:px-8">

                    <div
                        className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch"
                    >
                        <div className="flex items-center rounded bg-gray-500 p-8">
                            <div className="mx-auto text-center lg:text-left">
                                <h2 className="text-2xl font-bold text-white">Choose best Camera Types</h2>

                                <p className="mt-4 max-w-[45ch] text-sm text-white">
                                    There are several Camera brands in the market. WE have decorated our brands according to the categories
                                </p>


                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-3 lg:py-12">
                            {
                                categories.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)
                            }

                        </div>
                    </div>
                </div>
            </section>
        </div>


    );
};

export default Categories;