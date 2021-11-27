import React, { useEffect, useState } from 'react';
import BlogCard from '../blogCart/BlogCard';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('/blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div>
            <h1 className="text-center fw-bold text-danger pt-5">Our Blogs</h1>
            <div>
            <div className="ms-4">
                <div className="row">
                    <div className="col-md-12 col-sm-1">
                        <div className="row">
                        {
                            blogs.map(blog => <BlogCard key={blog.id} blog={blog} >
                            </BlogCard>)
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    </div>
    );
};

export default Blog;