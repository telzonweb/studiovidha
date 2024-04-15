import React from 'react';
import blogs from '../../api/blogs';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import bImg1 from '../../images/blog/2.jpg'
import bImg2 from '../../images/blog/3.jpg'

const BlogSingle = (props) => {

    const { slug } = useParams()

    const BlogDetails = blogs.find(item => item.slug === slug)

    const submitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <section className="blog-single mt-150 mb-50">
            <div className="container">
                <div className="blog-image">
                    <img src={BlogDetails?.blogSingleImg} alt="Blog" />
                    <span className="date">11 Nov 2020</span>
                </div>
                <h3 className="blog-title">{BlogDetails?.title}</h3>
                <ul className="admin-header">
                    <li><i className="fa fa-user"></i>By {BlogDetails?.authorTitle}</li>
                    <li><i className="fa fa-graduation-cap"></i>Property</li>
                    <li><i className="fa fa-home"></i>Residence</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                <blockquote>
                    Lorem ipsum dolor sit amet, odio legere cotidieque ex quo, an noster evertitur velei voluptatem solet democritum est. Id mel tibique ancillae convenire. Admodum tacimates maietatis his id. Sedeverti accusam facilisi.
                </blockquote>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                <div className="row mt-65">
                    <div className="col-md-6 mb-40">
                        <img src={bImg1} alt="Blog Single" />
                    </div>
                    <div className="col-md-6 mb-40">
                        <img src={bImg2} alt="Blog Single" />
                    </div>
                </div>
                <div className="blog-share mb-65">
                    <div className="social-icons">
                        <span className="social-title">Share</span>
                        <span>
                            <Link to="/blog"><i className="fa fa-twitter"></i></Link>
                            <Link to="/blog"><i className="fa fa-facebook-f"></i></Link>
                            <Link to="/blog"><i className="fa fa-instagram"></i></Link>
                            <Link to="/blog"><i className="fa fa-pinterest"></i></Link>
                        </span>
                    </div>
                </div>
                <form onSubmit={submitHandler} className="comment-form">
                    <h3 className="comment-title">Leave a Reply</h3>
                    <div className="row clearfix">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" name="full_name" id="full_name" className="form-control" required="" placeholder="Name" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="email" name="email" id="email" className="form-control" required="" placeholder="Email" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <input type="text" name="time" id="time" className="form-control" placeholder="Subject" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <textarea name="message" id="message" className="form-control" rows="8" required="" placeholder="Message"></textarea>
                            </div>
                        </div>
                        <div className="col-md-12 d-flex">
                            <input type="checkbox" id="condition" className="mt-5" required />
                            <label for="condition">Save my name, email, and website in this browser for the next time I comment.</label>
                        </div>
                        <div className="col-md-12">
                            <button type="submit" className="theme-btn style-two mt-25">Send message</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )

}

export default BlogSingle;
