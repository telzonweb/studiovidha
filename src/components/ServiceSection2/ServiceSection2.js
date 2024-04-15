import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../../api/Services';
import Bg from '../../images/services/service-bg.jpg'




const ServiceSection2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className="services-section pt-250 rpt-100 pb-70" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <div className="row">
                    {Services.slice(0,6).map((service, Sitem) => (
                        <div className="col-lg-4 col-md-6 col-12" key={Sitem}>
                            <div className="service-item">
                                <span className="number">0{service.Id}</span>
                                <img src={service.sImg} alt="Icon" />
                                <h3><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.sTitle}</Link></h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


export default ServiceSection2;