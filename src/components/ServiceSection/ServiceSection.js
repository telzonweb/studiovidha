import React from "react";
import { Link } from "react-router-dom";
import Services from "../../api/Services";
import Bg from "../../images/services/service-bg.jpg";

const ServiceSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section
      className={`services-section rpt-100 pb-70 ${props.ptClass}`}
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="container">
        <div className="row">
          {Services.slice(0, 3).map((service, Sitem) => (
            <div className="col-lg-4 col-md-6 col-12" key={Sitem}>
              <div className="service-item">
                <span className="number">0{service.Id}</span>
                <img src={service.sImg} alt="Icon" height="100px" />
                <h3>
                  <Link
                    onClick={ClickHandler}
                    to={`/service-single/${service.slug}`}
                  >
                    {service.sTitle}
                  </Link>
                </h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
