import React from "react";
import Bg from "../../images/team/abt-1.png";
import abimg1 from "../../images/wp/wp-1.png";
import abimg2 from "../../images/wp/wp-2.png";
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
                <span className="number">25</span>
                <h4>Years of Experience</h4>
              </div>
              <img src={abimg1} alt="Wordpress" />
              <img src={abimg2} alt="Wordpress" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="wp-content ml-50 rml-0 rpt-30">
              <div className="section-title mb-10">
                <h6>BEST ARCHITECT</h6>
                <h2>
                  Top Architecture <br />
                  <span> & interior</span> <br />
                  <span className="thin">designing Agency</span>
                </h2>
                <h6>welcome to StudioVida</h6>
              </div>
              <img src={abimg3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
