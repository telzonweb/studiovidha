import React from "react";
import Bg from "../../images/team/abt-1.png";
import abimg1 from "../../images/mainUpload/home/home01.jpg";
import abimg2 from "../../images/mainUpload/home/home02.jpg";
import abimg3 from "../../images/team/abt-3.png";

const About = (props) => {
  return (
    <section
      id="about"
      className="wp-section pt-150 rmb-100"
      // style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="wp-images rmb-150">
              <div className="experience-year">
                <span className="number">25+</span>
                <h4>Years of Experience</h4>
              </div>
              <img src="images/home/home02_Back.webp" alt="Wordpress" />
              <img src="images/home/home02_Front.webp" alt="Wordpress" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="wp-content ml-50 rml-0 rpt-30">
              <div className="section-title mb-10">
                <h6>BEST in class</h6>
                <h2>
                  The most promising Architecture
                  <br />
                  <span> & Interior</span> <br />
                  <span className="thin">Designing Firm</span>
                </h2>
                <h6>Welcome to Studio Vidha</h6>
              </div>
              <img src="images/home/home9.jpg" alt="" height="250px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
