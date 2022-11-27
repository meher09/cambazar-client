import React from 'react';
import { Link } from "react-router-dom";


const CategoryCard = ({ category }) => {

    const { _id, name, image } = category


    return (
        <Link to= {`category/${_id}`} className = "block p-3" >

            <img
                alt={name}
                src={image}
                className="aspect-square w-full rounded object-cover"
            />

            <div className="mt-2 text-center">
                <h3 className="font-medium">{name}</h3>
            </div>
        </Link >
    );
};

export default CategoryCard;