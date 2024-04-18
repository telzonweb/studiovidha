import React, { Fragment, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Project from '../../api/Projects';
import Plans from './Plans';
import Footer from '../../components/footer/Footer';
import { BASEURL } from '../../Constant';
const ProjectSinglePage = (props) => {
    const { slug } = useParams()
    const[portfolioDetails,setPortfolioDetails] = useState([])
const fetchPrortfolioDetails = async () =>{
const data = await fetch(`${BASEURL}/api/post/getposts?category=portfolio&slug=${slug}`);
const res = await data.json()
setPortfolioDetails(res.posts[0])
}
console.log(portfolioDetails)
// /api/post/getposts?category=portfolio
    useEffect(()=>{
        fetchPrortfolioDetails()
    },[slug])
    // const projectDetails = Project.find(item => item.slug === slug)

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={"Portfolio Details"} pagesub={'Project'} />
            <div className="project-single-area section-padding">
                <div className="property-single mt-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                
                            <img height={500} style={{width: '100%'}} src={portfolioDetails.image} />
                            <div
                    className="p-3 max-w-2xl mx-auto w-full post-content"
                    dangerouslySetInnerHTML={{ __html: portfolioDetails.content }}
                  ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            <Scrollbar />
        </Fragment>
    )
};
export default ProjectSinglePage;
