import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import BlogSingle from '../../components/BlogDetails/BlogDetails';
import blogs from '../../api/blogs'
import Footer from '../../components/footer/Footer';


const BlogDetails = () => {

    const { slug } = useParams()

    const BlogDetails = blogs.find(item => item.slug === slug)

    return (
        <Fragment>
            <Navbar hclass={'header-style-2'} />
            <PageTitle pageTitle={BlogDetails?.title} pagesub={'Blog'} />
            <BlogSingle />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogDetails;
