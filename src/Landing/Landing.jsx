import React, { Fragment, useState } from "react";
import Header from "../Landing/header/index";
import PageTitle from "../components/pagetitle/PageTitle";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import Services from "../api/Services";
import Bg from "../images/services/service-bg.jpg";
import Footer from "../components/footer/Footer";
import { useParams } from "react-router-dom"; // Import useParams
import { Helmet } from "react-helmet";
import FunFact from "../components/FunFact";
import { BASEURL } from "../Constant";
import Navbar from "../components/Navbar/Navbar";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import Services from "../api/Services";
const NewLanding = () => {
  const { city } = useParams(); // Use useParams hook to get city parameter
  console.log(city);
  const [openAccordion, setOpenAccordion] = useState(null);
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  const [scroll, setScroll] = useState(0);
  const testimonialSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoint according to your design
        settings: {
          slidesToShow: 1, // Display 2 items at a time on desktop
        },
      },
    ],
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const submitForm = async () => {
    try {
      const response = await fetch(`${BASEURL}/api/landing/form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setFormData({
        name: "",
        email: "",
        number: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const [menuActive, setMenuState] = useState(false);

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const className = scroll > 80 ? "fixed-navbar active" : "fixed-navbar";

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  console.log(city);
  return (
    <Fragment>
      <div className={className} style={{ backgroundColor: "#ca9c6a" }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title></title>
          <meta name="description" content="Helmet application" />
        </Helmet>

        <Header
          hclass={"header-style-3"}
          // Logo={props.Logo}
          topbarClass={"topbar-none"}
        />
      </div>

      <section
        className="pt-50 fs-5 mt-100"
        style={{ backgroundColor: "white" }}
      >
        <div className="container-lg px-0 d-flex justify-content-center align-items-stretch vh-100">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12 d-flex align-items-stretch mb-4">
              <img
                src="https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-eye-opening-iconic-buildings-of-modern-architecture.jpg"
                className="img-fluid rounded shadow-lg"
                alt="Architecture"
              />
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 d-flex align-items-stretch mb-4">
              <div className="card p-4 w-100">
                <h2 className="text-center mb-4">Contact Us</h2>
                <h4 className="text-center mb-4">
                  Book Free Design Consultation Today!
                </h4>
                <form onSubmit={handleSubmit} style={styles.contactForm}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control rounded"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control rounded"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      name="number"
                      className="form-control rounded"
                      placeholder="Your Number"
                      value={formData.number}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control rounded"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      style={{ backgroundColor: "#ca9c6a", border: "none" }}
                      className="btn btn-primary mb-4"
                    >
                      Get Free Design Consultation Today!
                    </button>
                    <div className="d-flex align-items-center justify-content-center">
                      <i
                        className="fas fa-phone-alt mr-2"
                        style={{ fontSize: "1.2rem" }}
                      ></i>
                      <p className="m-0">+91 9881102067</p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-5 text-center">
        <h1
          style={{
            color: "#rgb(175 150 76)",
            fontFamily: "Arial, sans-serif",
            fontSize: "3rem",
            fontWeight: "bold",
          }}
        >
          About Studio Vidha
        </h1>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.6", color: "#333" }}>
          Studio Vidha brings over a decade of design expertise to your
          doorstep. Specializing in both residential and commercial spaces, we
          tailor our designs to reflect your unique tastes and lifestyle. Our
          commitment to quality and client satisfaction makes us the preferred
          choice in Maharashtra.
        </p>
      </div>

      {/* service section */}

      <section>
        <section
          className="services-section pt-90 rpt-100 pb-70"
          style={{ backgroundImage: `url(${Bg})` }}
        >
          <div className="section-title mb-75 text-center">
            <h2>
              <span className="thin">Our Services</span>
            </h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-10">
                <div className="service-item">
                  <span className="number">01</span>
                  <img
                    height="120px"
                    width="120px"
                    src={`../images/vector/arch_vector.jpg`}
                    alt="Icon"
                  />
                  <h3>
                    <Link onClick={ClickHandler} to={`/service-single/`}>
                    Architecture Design
                    </Link>
                  </h3>
                  <p>
                  Our Architecture service is dedicated to seamlessly integrating functionality and aesthetics into every space we craft.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-10">
                <div className="service-item">
                  <span className="number">02</span>
                  <img
                    height="120px"
                    width="120px"
                    src={`../images/vector/int_vector.jpg`}
                    alt="Icon"
                  />
                  <h3>
                    <Link onClick={ClickHandler} to={`/service-single/`}>
                    Interior Design
                    </Link>
                  </h3>
                  <p>
                  Experience our architectural firm’s epitome of interior 
design excellence. Our effectively created interior 
design services elevate spaces with an optimal blend of 
elegance to functionality.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-10">
                <div className="service-item">
                  <span className="number">03</span>
                  <img
                    height="120px"
                    width="120px"
                    src={`../images/vector/land_vector.jpg`}
                    alt="Icon"
                  />
                  <h3>
                    <Link onClick={ClickHandler} to={`/service-single/`}>
                    Landscape Design 
                    </Link>
                  </h3>
                  <p>
                  Transform your outdoor space into a breathtaking oasis 
with our professional landscape design service.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="portfolio-section">
        <div className="container">
          <h2 className="text-center mb-5">Portfolio</h2>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img
                src="https://media.architecturaldigest.com/photos/5e4445124ad6c70008b982bb/master/w_1600%2Cc_limit/016%252520Piramides.jpg"
                alt="Portfolio item"
                style={{
                  marginTop: "20px",
                  borderRadius: "10px",
                  transition: "transform 0.3s ease",
                }}
                className="img-fluid"
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm- pt-60">
              <h4>Classy Living Spaces</h4>
              <p>
                Elevate your home to new heights of sophistication and 
style with our classy living spaces design service. From 
luxurious lounges to elegant entertainment areas, our 
expert designers specialize in creating refined and inviting 
environments that exude timeless charm and effortless 
glamour.
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img
                src="https://www.contemporist.com/wp-content/uploads/2018/08/modern-architecture-building-design-wood-010818-121-01-800x613.jpg"
                alt="Portfolio item"
                style={{
                  marginTop: "20px",
                  borderRadius: "10px",
                  transition: "transform 0.3s ease",
                }}
                className="img-fluid"
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 pt-60">
            <h4>Modern Kitchen Areas</h4>
              <p>
              Experience the perfect blend of style, functionality, and 
innovation with our modern kitchen designs. Our expert 
designers specialize in creating sleek and sophisticated 
culinary spaces that are as beautiful as they are practical, 
redefining the heart of your 
home with cutting-edge design and state-of-the-art 
amenities.

              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12" alt="Portfolio item">
              <img
                src="https://parametric-architecture.com/wp-content/uploads/2023/05/Tim-Fu-AI-3.jpg"
                alt="Portfolio item"
                style={{
                  marginTop: "20px",
                  borderRadius: "10px",
                  transition: "transform 0.3s ease",
                }}
                className="img-fluid"
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 pt-60">
            <h4>Cozy Bedroom Designs</h4>
              <p>
                Create a warm and inviting retreat where you can 
escape the stresses of the day and unwind in comfort with 
our cozy bedroom designs. Our expert designers 
specialize in crafting intimate and snug spaces that 
envelop you in a sense of serenity and relaxation, bringing 
a touch of comfort and coziness to every corner of your 
bedroom.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-70">
        <FunFact />
      </div>

      <section
        className="faq-section pt-50 pb-70"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: "#000000" }}>
            Frequently Asked Questions
          </h2>
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
                  className={`accordion-collapse collapse ${
                    openAccordion === index ? "show" : ""
                  }`}
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#accordionExample"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <div className="accordion-body" style={{ color: "#000000" }}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ml-4 mr-4">
        <h2 className="text-center mb-5 mt-50" style={{ color: "#000000" }}>
          Testimonials
        </h2>
        <Slider {...testimonialSliderSettings}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <div className="testimonial-item">
                <p className="comment">{testimonial.comment}</p>
                <p className="name">{testimonial.name}</p>
                <p className="designation">{testimonial.designation}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* <section className="similar-services-section pt-50 pb-70" style={{ backgroundColor: "#ffffff" }}>
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
      </section> */}

      <Footer />
    </Fragment>
  );
};

export default NewLanding;

const styles = {
  contactForm: {
    maxWidth: "400px",
    margin: "0 auto",
  },
};
const FAQData = [
  {
    question: "Question 1: What Type of Services do you offer?",
    answer:
      "Answer 1: We provide a comprehensive range of services spanning from conceptual design to execution in Architecture, Interior Design, and Landscape Design.",
  },
  {
    question: "Question 2: How do you deal with client’s specific needs and requirements?",
    answer:
      "Answer 2: We make it a point to meet with our clients directly to grasp their needs regarding a specific area. We are a believer for including our clients from the initial phases of the project.",
  },
  {
    question: "Question 3: How do you handle project constraints such as budget and timeline?",
    answer: "Answer 3: We ensure optimal budget utilization by employing high-quality materials, supported by a proficient team of vendors who guarantee timely completion of every task.",
  },
  {
    question: "Question 4: What sets your firm apart from others offering similar services?",
    answer: "Answer 4:We offer top-tier concepts and ensure their execution aligns precisely with your envisioned and promised outcomes.",
  },
  {
    question: "Question 5: What ongoing support or services do you provide after the project is completed?",
    answer: "Answer 5: We extend post-execution services, including vendor provision for maintenance and consultation wherever necessary, within the scope of our work.",
  },
  // {
  //   question: "Question 6: What is the check-in/check-out time?",
  //   answer: "Answer 6: Our standard check-in time is 3:00 PM, and check-out time is 12:00 PM.",
  // },
  // {
  //   question: "Question 7: Do you offer room service?",
  //   answer: "Answer 7: Yes, we provide room service for our guests during specified hours.",
  // },
  // {
  //   question: "Question 8: Is there a fitness center available?",
  //   answer: "Answer 8: Yes, we have a fitness center available for guests to use.",
  // },
];

const testimonials = [
  {
    name: "Mr. Pankaj Gupta",
    // designation: "CEO, Company Name",
    comment:
      "It's good knowledge and valuable service with very affordable cost.",
  },
  {
    name: "Mr. Nilesh Dube",
    // designation: "Creative Director, Another Company",
    comment:
      "Extremely pleased with the services and expertise provided for my home. Keep up the good work.",
  },
  {
    name: "Miss Yamin",
    // designation: "CEO, Company Name",
    comment:
      "Most promising architectural firm. They will give your house a feeling of Home with their skills. Highly recommended!",
  },
  // {
  //   name: "Jane Smith",
  //   designation: "Creative Director, Another Company",
  //   comment:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  // },
  // Add more testimonials as needed
];
