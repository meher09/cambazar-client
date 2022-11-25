import React from 'react';
import useTitle from '../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            This is Blog Page
        </div>
    );
};

export default Blog;