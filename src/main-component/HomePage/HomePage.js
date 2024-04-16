import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Hero from "../../components/hero/hero";
import About from "../../components/about/about";
// import FunFact from '../../components/FunFact';
// import About from '../../components/about/about';
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import VideoSection from "../../components/VideoSection/VideoSection";
import PartnerSection from "../../components/PartnerSection";
import ResturantSec from "../../components/ResturantSec/ResturantSec";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import FunFact from "../../components/FunFact";
import FaqSection from "../../components/FaqSection/FaqSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import Footer from "../../components/footer/Footer";
import YtGrid from "../../components/YTGrid/YtGrid";

const HomePage = () => {
  return (
    <Fragment>
      <Navbar hclass={"header-style-3"} topbarNone={"topbar-none"} />
      <Hero />
      <About />
      <ServiceSection ptClass={"pt-250"} />
      {/* <VideoSection /> */}
      <YtGrid />
      <PartnerSection />
      <ResturantSec />
      <ProjectSection />
      <FunFact />
      <FaqSection />
      {/* <ContactSection /> */}
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default HomePage;
