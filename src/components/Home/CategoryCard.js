import React from 'react';

const CategoryCard = () => {
    return (
        <a href="/" class="block">
            <img
                alt="Simple Watch"
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                class="aspect-square w-full rounded object-cover"
            />

            <div class="mt-2 text-center">
                <h3 class="font-medium">Cateogory Name</h3>
            </div>
        </a>
    );
};

export default CategoryCard;