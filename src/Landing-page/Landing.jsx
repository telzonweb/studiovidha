import React, { Fragment,useState } from "react";
import Header from "../Landing-page/header/index";
import PageTitle from "../components/pagetitle/PageTitle";
import { Link } from "react-router-dom";
import Services from "../api/Services";
import Bg from "../images/services/service-bg.jpg";
import Footer from "../components/footer/Footer";
import { useParams } from "react-router-dom"; // Import useParams
import {Helmet} from "react-helmet";

const Landing = () => {
  const { city } = useParams(); // Use useParams hook to get city parameter
console.log(city)
const [openAccordion, setOpenAccordion] = useState(null);
const toggleAccordion = (index) => {
  setOpenAccordion(openAccordion === index ? null : index);
};
  const [scroll, setScroll] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const stringWithHyphens = city;
const stringWithSpaces = stringWithHyphens.replace(/-/g, ' ');



  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  const stringWithHyphenss = city;
  const parts = stringWithHyphenss.split("-");
  const lastString = parts[parts.length - 1];

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
  console.log(city)
  return (
<Fragment>
<div className={className} style={{ backgroundColor: "#ca9c6a" }}>
<Helmet>
                <meta charSet="utf-8" />
                <title>{lastString}</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
  
        <Header
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
                    <h2 style={{ fontSize: "50px" }}>{`${stringWithSpaces}`}</h2>
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
              src="../images/about/about.jpg"
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
                  src={`../${service.sImg}`}
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
    <section className="portfolio-section">
  <div className="container">
    <h2 className="text-center mb-5">Portfolio</h2>
    <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-12">
        <img src="https://parametric-architecture.com/wp-content/uploads/2023/05/Tim-Fu-AI-3.jpg" alt="Portfolio item" style={{marginTop: '20px', borderRadius: '10px', transition: 'transform 0.3s ease'}} className="img-fluid"/>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12">
        <img src="https://parametric-architecture.com/wp-content/uploads/2023/05/Tim-Fu-AI-3.jpg" alt="Portfolio item" style={{marginTop: '20px', borderRadius: '10px', transition: 'transform 0.3s ease'}} className="img-fluid"/>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12">
        <img src="https://parametric-architecture.com/wp-content/uploads/2023/05/Tim-Fu-AI-3.jpg" alt="Portfolio item" style={{marginTop: '20px', borderRadius: '10px', transition: 'transform 0.3s ease'}} className="img-fluid"/>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12">
        <img src="https://parametric-architecture.com/wp-content/uploads/2023/05/Tim-Fu-AI-3.jpg" alt="Portfolio item" style={{marginTop: '20px', borderRadius: '10px', transition: 'transform 0.3s ease'}} className="img-fluid"/>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12">
        <img src="https://parametric-architecture.com/wp-content/uploads/2023/05/Tim-Fu-AI-3.jpg" alt="Portfolio item" style={{marginTop: '20px', borderRadius: '10px', transition: 'transform 0.3s ease'}} className="img-fluid"/>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12">
        <img src="https://parametric-architecture.com/wp-content/uploads/2023/05/Tim-Fu-AI-3.jpg" alt="Portfolio item" style={{marginTop: '20px', borderRadius: '10px', transition: 'transform 0.3s ease'}} className="img-fluid"/>
      </div>
    </div>
  </div>
</section>



    <section className="faq-section pt-50 pb-70" style={{ backgroundColor: "#ffffff" }}>
  <div className="container">
    <h2 className="text-center mb-5" style={{ color: "#000000" }}>Frequently Asked Questions</h2>
    <div className="accordion mt-4" id="accordionExample">
      {FAQData.map((faq, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header" id={`heading${index}`}>
            <button
              className="accordion-button"
              type="button"
              style={{ color: "#000000" }}
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse collapse ${openAccordion === index ? "show" : ""}`}
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordionExample"
            style={{ backgroundColor: "#ffffff" }}
          >
            <div className="accordion-body" style={{ color: "#000000" }}>{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


    {/* <section className="contact-section bg-light mt-2">
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
<button type="submit" style={{ backgroundColor: '#ca9c6a', border: 'none' }} className="btn btn-primary mb-4">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section> */}

      <section className="similar-services-section pt-50 pb-70" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <h3 className="text-center mb-5" style={{ color: "#000000" }}>Similar Services in Other Cities:</h3>
          <div className="text-center">
            <Link to="/top-architect-in-bangalore">Architect in Bangalore</Link> |&nbsp;
            <Link to="/top-architect-in-mumbai">Architect in Mumbai</Link> |&nbsp;
            <Link to="/top-architect-in-chennai">Architect in Chennai</Link> |&nbsp;
            <Link to="/top-architect-in-delhi">Architect in Delhi</Link> |&nbsp;
            <Link to="/top-architect-in-hyderabad">Architect in Hyderabad</Link> |&nbsp;
            <Link to="/top-architect-in-gurgaon">Architect in Gurgaon</Link> |&nbsp;
            <Link to="/top-architect-in-noida">Architect in Noida</Link> |&nbsp;
            <Link to="/top-architect-in-greater-noida">Architect in Greater Noida</Link> |&nbsp;
            <Link to="/top-architect-in-faridabad">Architect in Faridabad</Link> |&nbsp;
            <Link to="/top-architect-in-ghaziabad">Architect in Ghaziabad</Link>.
          </div>
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
  const FAQData = [
    {
      question: "Question 1: What types of accommodation do you offer?",
      answer: "Answer 1: We offer various types of accommodation including single rooms, double rooms, suites, and dormitories.",
    },
    {
      question: "Question 2: What amenities are included with the accommodation?",
      answer: "Answer 2: Our accommodation comes with amenities such as free Wi-Fi, complimentary breakfast, air conditioning, and 24/7 security.",
    },
    {
      question: "Question 3: Do you provide laundry services?",
      answer: "Answer 3: Yes, we offer laundry services for our guests.",
    },
    {
      question: "Question 4: Is parking available on-site?",
      answer: "Answer 4: Yes, we provide parking facilities for our guests.",
    },
    {
      question: "Question 5: Are pets allowed in the accommodation?",
      answer: "Answer 5: Unfortunately, we do not allow pets in our accommodation.",
    },
    {
      question: "Question 6: What is the check-in/check-out time?",
      answer: "Answer 6: Our standard check-in time is 3:00 PM, and check-out time is 12:00 PM.",
    },
    {
      question: "Question 7: Do you offer room service?",
      answer: "Answer 7: Yes, we provide room service for our guests during specified hours.",
    },
    {
      question: "Question 8: Is there a fitness center available?",
      answer: "Answer 8: Yes, we have a fitness center available for guests to use.",
    },
  ];
  