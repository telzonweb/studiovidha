import React from 'react';
import { Link } from 'react-router-dom'
import BlogSidebar from '../BlogSidebar'

import blogs from '../../api/blogs'



const BlogList = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="blog-list mt-150 mb-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        {blogs.map((blog, bitem) => (

                            <div className="blog-item" key={bitem}>
                                <div className="blog-image">
                                    <img src={blog.blogSingleImg} alt="Blog Image" />
                                    <span className="date">{blog.create_at}</span>
                                </div>
                                <div className="blog-content">
                                    <h3><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h3>
                                    <ul className="admin-header">
                                        <li><i className="fa fa-user"></i><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>By {blog.authorTitle}</Link></li>
                                        <li><i className="fa fa-graduation-cap"></i><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>Property</Link></li>
                                        <li><i className="fa fa-home"></i><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>Residence</Link></li>
                                    </ul>
                                    <p>{blog.description}</p>
                                    <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`} className="read-more">Read More</Link>
                                </div>
                            </div>
                        ))}

                    </div>

                    <BlogSidebar />

                </div>
            </div>
        </section>

    )

}

export default BlogList;
