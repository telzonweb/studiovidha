import React from 'react';
import ContactForm from '../ContactFrom'
import sIcon1 from '../../images/contact/icon1.png'
import sIcon2 from '../../images/contact/icon2.png'
import sIcon3 from '../../images/contact/icon3.png'


const Contactpage = () => {

    return (
        <div>
            <div class="contact-map" id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"></iframe>
            </div>
            <div className="contact-info text-center mb-110">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="info-item">
                            <img src={sIcon1} alt="Icon"/>
                                <p>20 Broklyn Street, New Town New York, United States</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="info-item">
                            <img src={sIcon2} alt="Icon"/>
                                <p>needhelp@charie.com <br/>666 888 0000</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="info-item">
                            <img src={sIcon3} alt="Icon"/>
                                <p>Web Address: <br/>yourwebsite.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <ContactForm/> */}
        </div>
    )

}

export default Contactpage;
