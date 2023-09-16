import { useEffect, useState } from "react";
import Blog from "./Blog";
import PropTypes from 'prop-types'

const Blogs = (handleAddToCart) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('Blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3 grid grid-cols-3 gap-5">
           {
            blogs.map(blog=> <Blog key={blog.id}
                handleAddToCart={handleAddToCart}
                blog={blog}></Blog>)
           } 

        </div>
    );
};

Blogs.propTypes={
    handleAddToCart: PropTypes.func  
}
export default Blogs;