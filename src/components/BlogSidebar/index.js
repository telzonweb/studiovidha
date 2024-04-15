import React from 'react';
import { Link } from 'react-router-dom'
import Services from '../../api/Services';


const BlogSidebar = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="col-lg-4">
            <div className="sidebar ml-95 rml-0 rmt-100">
                <div className="widget widget-category">
                    <h3 className="widget-title">Categories</h3>
                    <div className="category-list">
                        <ul className="list-style-one">
                            {Services.slice(0, 5).map((service, Sitem) => (
                                <li key={Sitem}><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.sTitle}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="widget widget-recent-posts">
                    <h3 className="widget-title">Recent Posts</h3>
                    <div className="post-list">
                        <ul className="list-style-one">
                            <li><Link onClick={ClickHandler} to="/blog">Safe For Kids</Link></li>
                            <li><Link onClick={ClickHandler} to="/blog">Bathroom Oasis</Link></li>
                            <li><Link onClick={ClickHandler} to="/blog">Homes to Inspire</Link></li>
                            <li><Link onClick={ClickHandler} to="/blog">New Website Online</Link></li>
                            <li><Link onClick={ClickHandler} to="/blog">New School Teachers</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="widget widget-search">
                    <h3 className="widget-title">Search</h3>
                    <form onSubmit={SubmitHandler} className="search-form">
                        <input type="search" required/>
                            <button type="submit" className="theme-btn">search</button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default BlogSidebar;
