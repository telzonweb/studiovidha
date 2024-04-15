import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import Navbar from '../../components/Navbar/Navbar'
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import About2 from '../../components/about2/about2';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import FunFact from '../../components/FunFact';
import TeamSection from '../../components/TeamSection/TeamSection';
import VideoSection from '../../components/VideoSection/VideoSection';

const AboutPage = () => {
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'About Us'} pagesub={'About'} />
            <ServiceSection ptClass={'pt-100'}/>
            <About2 />
            <FunFact fClass={'style-two pt-165 pb-125 mb-0'}/>
            <TeamSection/>
            <VideoSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutPage;
