import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import ServiceSection2 from '../../components/ServiceSection2/ServiceSection2';
import FaqSectionS2 from '../../components/FaqSectionS2/FaqSectionS2';
import ContactSection from '../../components/ContactSection/ContactSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';



const ServicePage =() => {
    return(
        <Fragment>
            <Navbar hclass={'header-style-2'}/>
            <PageTitle pageTitle={'Services'} pagesub={'Service'}/> 
            <FaqSectionS2 />
            <ServiceSection2/>
            <ContactSection />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ServicePage;
