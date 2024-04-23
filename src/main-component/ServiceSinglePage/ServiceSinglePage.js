import React, { Fragment, useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { useParams } from "react-router-dom";
import Services from "../../api/Services";
import Contact from "./contact";
import Footer from "../../components/footer/Footer";
import "./style.scss";
import { Link } from "react-router-dom";
const data = {
  Services: [
    {
      Slug: "architecture-design",
      Service: "Architecture Design",
      sSimg: "/images/services/arch/arch1.webp",
      ssImg1: "/images/services/arch/arch2.webp",
      ssImg2: "/images/services/arch/arch3.webp",

      Description:
        "Our Architecture service is dedicated to seamlessly integrating functionality and aesthetics into every space we craft. From initial concepts to final execution, we prioritize innovation, functionality and ensuring client satisfaction. With a team of skilled architects and designers, we specialize in creating bespoke designs tailored to meet each client's unique needs and vision. Whether it's residential, commercial, or projects related to public spaces, we strive to exceed client's expectations, delivering timeless designs that inspire and endure.",
      IncludedServices: [
        "Planning",
        "3D elevation design",
        "Sanctioning",
        "Site planning",
        "Layout Planning",
        "Site visits and Supervision",
      ],
    },
    {
      Slug: "interior-design",
      Service: "Interior Design",
      Description:
        "Experience our architectural firm’s epitome of interior design excellence. Our effectively created interior design services elevate spaces with an optimal blend of elegance to functionality. Our creative team of designers turns concepts into immersive realities with an uncompromising dedication to innovation while delivering client satisfaction. We specialise in creating custom designs that perfectly reflect each client’s own character, whether they are for vibrant commercial areas or serene residential spaces. Discover the best innovative interior design solutions when working with our architectural firm.",
      sSimg: "/images/services/interior/int1.webp",
      ssImg1: "/images/services/interior/int2.webp",
      ssImg2: "/images/services/interior/int3.webp",
      IncludedServices: [
        "3D Designs",
        "Interior and Spaces Design",
        "Turnkey Consultants",
        "Furniture Design",
        "Modular kitchens",
        "False ceiling Design",
        "Home Décor",
        "Site Visits and Supervision",
      ],
    },
    {
      Slug: "landscape-design",
      Service: "Landscape Design",
      Description:
        "Transform your outdoor space into a breathtaking oasis with our professional landscape design service. We understand that the outdoor environment is an integral part of any architectural project. Our comprehensive landscape design services seamlessly integrate the built environment with the natural surroundings, creating harmonious and functional outdoor spaces that enhance the overall quality of life.",
      sSimg: "/images/services/land/land1.webp",
      ssImg1: "/images/services/land/land2.webp",
      ssImg2: "/images/services/land/land3.webp",
      IncludedServices: [
        "Site Analysis and Planning",
        "Conceptual Design",
        "Master Planning",
        "Planting Design",
        "Hardscape Design",
      ],
    },
  ],
};

// console.log(data);

const ServiceSinglePage = (props) => {
  const { slug } = useParams();
  const [serviceDetailsdata, setServiceDetailsdata] = useState(null);
  useEffect(() => {
    const serviceDetails = data.Services.find((item) => item.Slug === slug);
    if (serviceDetails) {
      setServiceDetailsdata(serviceDetails);
    }
  }, [slug]);
  console.log(serviceDetailsdata);

  if (!serviceDetailsdata) {
    return null; // or loading indicator
  }
  const serviceDetails = Services.find((item) => item.slug === slug);
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <Fragment>
      <Navbar hclass={"header-style-2"} />
      <PageTitle pageTitle={serviceDetails.sTitle} pagesub={"Service"} />
      <div className="service-single-area section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-11">
              <div className="service-single-wrap">
                <div className="service-single-item">
                  <div className="service-single-main-img">
                    <img
                      src={serviceDetailsdata.sSimg}
                      height={400}
                      width={1310}
                      alt=""
                    />
                  </div>
                  <div className="service-single-title">
                    <h3>{serviceDetailsdata.Service}</h3>
                  </div>
                  <p>{serviceDetailsdata.Description}</p>

                  <div className="row mt-4">
                    <div className="col-md-6 col-sm-6 col-12">
                      <div className="p-details-img">
                        <img
                          src={serviceDetailsdata.ssImg1}
                          height={370}
                          width={550}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-12">
                      <div className="p-details-img">
                        <img
                          src={serviceDetailsdata.ssImg2}
                          height={370}
                          width={570}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-single-item list-widget">
                  <div className="service-single-title">
                    <h3>Included Services</h3>
                  </div>

                  <ul>
                    {serviceDetailsdata.IncludedServices.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                {/* <div className="service-single-item">
                                    <div className="service-single-title">
                                        <h3>Our approach</h3>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat suspendisse aenean
                                        tellus augue morbi risus. Sit morbi vitae morbi sed urna sed purus. Orci facilisi
                                        eros sed pellentesque. Risus id sed tortor sed scelerisque. Vestibulum elit
                                        elementum, magna id viverra non, velit. Pretium, eros, porttitor fusce auctor vitae
                                        id. Phasellus scelerisque nibh eleifend vel enim mauris purus. Rutrum vel sem
                                        adipiscing nisi vulputate molestie scelerisque molestie ultrices. Eu, fusce
                                        vulputate diam interdum morbi ac a.</p>
                                </div>
                                <div className="service-single-item list-widget">
                                    <div className="service-single-title">
                                        <h3>Our Work Process</h3>
                                    </div>
                                    <ul>
                                        <li>Non saed velit dictum quam risus pharetra esta.</li>
                                        <li>Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.</li>
                                        <li>Hac nibh fermentum nisi, platea condimentum cursus.</li>
                                        <li>Massa volutpat odio facilisis purus sit elementum.</li>
                                    </ul>
                                </div> */}
                {/* <div className="service-single-item">
                  <div className="service-single-title">
                    <h3>Related Service</h3>
                  </div>
                  <div className="service-area">
                    <div className="row align-items-center">
                      {Services.slice(0, 2).map((service, srv) => (
                        <div className="col-lg-6 col-md-6 col-12" key={srv}>
                          <div className="service-item">
                            <i>
                              <img src={service.sImg} alt="" />
                            </i>
                            <Link
                              onClick={ClickHandler}
                              to={`/service-single/${service.slug}`}
                            >
                              {service.sTitle}
                            </Link>

                            <p>
                              Lacus, etiam sed est eu tempus need Temer diam
                              congue.
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div> */}
                {/* <div className="service-single-item">
                                    <div className="service-contact-area">
                                        <div className="contact-title">
                                            <h2>Any question? Let's discuss</h2>
                                            <p>Get in touch with us to see how we can help you with your project</p>
                                        </div>
                                        <div className="contact-form-area">
                                            <Contact/>
                                        </div>
                                    </div>
                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default ServiceSinglePage;
