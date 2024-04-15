import React, { useState } from 'react';
import fImg from '../../images/faq/faq-right-bg.png'
import fImg1 from '../../images/services/img1.png'
import fImg2 from '../../images/services/img2.png'

import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';



const FaqSectionS2 = (props) => {

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (

        <section className="faq-section mt-150">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 pr-125 rpr-15">
                        <div class="service-page-images rmb-150">
                            <img src={fImg1} alt="Services"/>
                            <img src={fImg2} alt="Service"/>
                        </div>
                    </div>
                    <div className="col-lg-6 pl-0">
                        <div className="faq-accordion ras-content pt-95 pb-110 rpb-0 rmb-100">
                            <div className="section-title mb-35">
                                <h6>Best Architecture</h6>
                                <h2>Architecture did  expect
                                    <span className="thin">strategist</span>
                                </h2>
                            </div>
                            <div id="accordion">
                                <Accordion open={open} toggle={toggle}>
                                    <AccordionItem className='card'>
                                        <AccordionHeader targetId="1" className='card-header'>Core Architeture</AccordionHeader>
                                        <AccordionBody accordionId="1">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem className='card'>
                                        <AccordionHeader targetId="2" className='card-header'>Restaurants</AccordionHeader>
                                        <AccordionBody accordionId="2">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem className='card'>
                                        <AccordionHeader targetId="3" className='card-header'>Hospital</AccordionHeader>
                                        <AccordionBody accordionId="3">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem className='card'>
                                        <AccordionHeader targetId="4" className='card-header'>Restaurants</AccordionHeader>
                                        <AccordionBody accordionId="4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                        </AccordionBody>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                        <div className="faq-right-bg">
                            <img src={fImg} alt="FAQ" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default FaqSectionS2;