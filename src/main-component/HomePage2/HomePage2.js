import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2'
import Hero2 from '../../components/hero2/hero2';
import About2 from '../../components/about2/about2';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import FunFact from '../../components/FunFact';
import TeamSection from '../../components/TeamSection/TeamSection';
import VideoSection from '../../components/VideoSection/VideoSection';
import FaqSection from '../../components/FaqSection/FaqSection';
import ContactSection from '../../components/ContactSection/ContactSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';

const HomePage2 = () => {
    return (
        <Fragment>
            <Navbar2 />
            <Hero2/>
            <ServiceSection ptClass={'pt-100'}/>
            <About2 />
            <FunFact fClass={'style-two pt-165 pb-125 mb-0'}/>
            <TeamSection/>
            <VideoSection vclass={"pb-120"}/>
            <FaqSection />
            <ContactSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage2;