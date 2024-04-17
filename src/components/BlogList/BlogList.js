import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogSidebar from "../BlogSidebar";
import { domain } from "../../domain";

const BlogList = (props) => {
  const [posts, setPosts] = useState([]);
  const [pageNo, setPageNo] = useState(0);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    async function getBlogs() {
      let data;
      if (pageNo !== 0) {
        const res = await fetch(
          `${domain}/api/post/getposts?startIndex=${pageNo * 6}&limit=6`
        );
        data = await res.json();
      } else {
        const res = await fetch(`${domain}/api/post/getposts?limit=6`);
        data = await res.json();
      }
      setPosts(data.posts);
    }
    getBlogs();
  }, [pageNo]);

  function handlePageIncrease() {
    if (pageNo * 6 < posts.length) setPageNo(pageNo + 1);
  }

  function handlePageReduce() {
    if (pageNo > 0) setPageNo(pageNo - 1);
  }

  return (
    <section className="blog-list mt-150 mb-50">
      <div className="container">
        <div className="row text-center">
          <div className="row">
            {posts.map((blog, bitem) => (
              <div key={bitem} className="col-lg-4 col-md-6 mb-4">
                
                <div className="blog-item" >
                <div className="blog-image">
                  <img src={blog.image} alt="Blog Image" />
                  <span className="date">
                    {new Date(blog.createdAt).toDateString()}
                  </span>
                </div>
                <div className="blog-content">
                  <h3>
                    <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                      {blog.title}
                    </Link>
                  </h3>
                  <p>{blog.description}</p>
                  <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`} className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
                </div>
             
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
