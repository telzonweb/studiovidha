import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogSidebar from "../BlogSidebar";

import blogs from "../../api/blogs";
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
      // const res = await fetch("http://localhost:5173/api/post/getPosts");
      let data;
      if (pageNo !== 0) {
        const res = await fetch(
          `${domain}/api/post/getposts?startIndex=${pageNo * 6}?limit=6?`
        );

        data = await res.json();
      } else {
        const res = await fetch(`${domain}/api/post/getposts?limit=6`);

        data = await res.json();
      }
      // console.log(data.posts);
      setPosts(data.posts);
    }
    getBlogs();
    // console.log(posts);
  }, [pageNo]);

  function handlePageIncrease() {
    if (pageNo * 6 < posts.length) setPageNo(pageNo + 1);
    // console.log(pageNo);
  }
  function handlePageReduce() {
    // console.log(postData.length);
    if (pageNo > 0) setPageNo(pageNo - 1);
    // console.log(pageNo);
  }

  return (
    <section className="blog-list mt-150 mb-50">
      {/* {console.log(posts)} */}
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-8 mx-auto">
            {posts.map((blog, bitem) => (
              <div className="blog-item" key={bitem}>
                <div className="blog-image">
                  <img src={blog.image} alt="Blog Image" />
                  <span className="date">{blog.create_at}</span>
                </div>
                <div className="blog-content">
                  <h3>
                    <Link
                      onClick={ClickHandler}
                      to={`/blog-single/${blog.slug}`}
                    >
                      {blog.title}
                    </Link>
                  </h3>
                  <ul className="admin-header">
                    <li>
                      <i className="fa fa-user"></i>
                      <Link
                        onClick={ClickHandler}
                        to={`/blog-single/${blog.slug}`}
                      >
                        By {blog.authorTitle}
                      </Link>
                    </li>
                    <li>
                      <i className="fa fa-graduation-cap"></i>
                      <Link
                        onClick={ClickHandler}
                        to={`/blog-single/${blog.slug}`}
                      >
                        Property
                      </Link>
                    </li>
                    <li>
                      <i className="fa fa-home"></i>
                      <Link
                        onClick={ClickHandler}
                        to={`/blog-single/${blog.slug}`}
                      >
                        Residence
                      </Link>
                    </li>
                  </ul>
                  <p>{blog.description}</p>
                  <Link
                    onClick={ClickHandler}
                    to={`/blog-single/${blog.slug}`}
                    className="read-more"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* <BlogSidebar /> */}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
