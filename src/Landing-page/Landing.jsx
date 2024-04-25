import React, { Fragment,useState } from "react";
import Header from "../Landing-page/header/index";
import PageTitle from "../components/pagetitle/PageTitle";
import { Link } from "react-router-dom";
import Services from "../api/Services";
import Bg from "../images/services/service-bg.jpg";
import Footer from "../components/footer/Footer";
const Landing = () => {
    
  const [scroll, setScroll] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend)
    console.log(formData);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const className = scroll > 80 ? "fixed-navbar active" : "fixed-navbar";

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
<Fragment>
<div className={className} style={{ backgroundColor: "#ca9c6a" }}>      <Header
        hclass={'header-style-3'}
        // Logo={props.Logo}
        topbarClass={'topbar-none'}
      />
    </div>
    {/* Hero image */}
    <section className="banner-section mt-110 rmt-70">
            <div className="container">
                <div className="banner-inner">
                    <div style={{ marginBottom: '100px' }} className="page-title">
                        <h2></h2>
                        <span></span>
                    </div>
                    <nav aria-label="breadcrumb" style={{ backgroundColor: '#ca9c6a' }}>
                    </nav>
                </div>
            </div>
        </section>

        {/* About Section */}
        <section className="pt-50 pl-50 pr-40 fs-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img
              src="images/about/about.jpg"
              alt="about"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h2>Vidha (विधा)</h2>
            <p>
              "It essentially refers to a manner or style of expression,
              encompassing various forms within art and more. Architecture, as
              an artistic discipline, shares common principles with other forms
              of art, such as the involvement of senses, consideration of
              lifestyle, incorporation of visual elements, and attention to the
              technical details."
            </p>
            <p>
              As a studio specializing in Architecture and Interior Designing,
              adopting the title 'Vidha' not only reflects our cultural roots
              but also accentuates our identity and purpose within the
              architectural realm.
            </p>
          </div>
        </div>
            
      </div>
    </section>

    {/* service section */}

    <section
      className="services-section pt-190 rpt-100 pb-70"
      style={{ backgroundImage: `url(${Bg})` }}
    >
          <div className="section-title mb-75 text-center">
        <h2>
          Our <span className="thin">Services</span>
        </h2>
     
      </div>
      <div className="container">
        <div className="row">
          {Services.slice(0, 3).map((service, Sitem) => (
            <div className="col-lg-4 col-md-4 col-12" key={Sitem}>
              <div className="service-item">
                <span className="number">0{service.Id}</span>
                <img
                  height="120px"
                  width="120px"
                  src={service.sImg}
                  alt="Icon"
                />
                <h3>
                  <Link
                    onClick={ClickHandler}
                    to={`/service-single/${service.slug}`}
                  >
                    {service.sTitle}
                  </Link>
                </h3>
                <p>{service.description}</p>
                <h4>Services</h4>
                <ul>
                  {service.IncludedServices.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="contact-section bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Contact Us</h2>
          <form onSubmit={handleSubmit} style={styles.contactForm}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>



<Footer/>
  
    </Fragment>
  )
}

export default Landing

const styles = {
    contactForm: {
      maxWidth: "400px",
      margin: "0 auto",
    },
  };